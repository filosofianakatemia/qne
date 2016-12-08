import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionElement } from './element.model';
import { AnswerValue } from '../action/answer-value.model';
import { AnswerAction } from '../shared/shared.actions';
import { Instruction } from '../instruction/instruction.model';

import * as fromRoot from '../shared/main.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'elements',
  template: `
    <div *ngFor="let element of elements">

        <div *ngIf= "(element.type == 'likert')">
          <likert [element]="element" [previousAnswer]="getElementAnswer(element.uuid)" (answer)="addToAnswers($event)"></likert>
        </div>

        <div *ngIf= "(element.type == 'textarea')">
          <textareaSelector [element]="element" [previousAnswer]="getElementAnswer(element.uuid)" (answer)="addToAnswers($event)"></textareaSelector>
        </div>

        <div *ngIf= "(element.type == 'checkbox')">
          <checkbox [element]="element" [previousAnswer]="getElementAnswer(element.uuid)" (answer)="addToAnswers($event)"></checkbox>
        </div>

        <div *ngIf= "(element.type == 'text')">
          <text [element]="element" (answer)="addToAnswers($event)"></text>
        </div>

        <div *ngIf= "(element.instruction != null)">
          <instruction [instruction]="instructions | instructionFilter:element.instruction"></instruction>
        </div>
    <hr/>
    </div>
  `
})

export class ElementComponent{
  @Input() instructions: Instruction[];
  @Input() elements: QuestionElement[];
  @Input() answers: AnswerValue[];
  @Output() navigate: EventEmitter<any> = new EventEmitter<any>();
  constructor(private store: Store<fromRoot.State>){};

  getElementAnswer(uuid: string):AnswerValue{
    return this.answers.filter(a => a.element === uuid)[0];
  }

  addToAnswers($event: any){
    let ans: AnswerValue = this.createAnswer($event.element, $event.value);
    this.navigate.emit(null);
    this.store.dispatch(new AnswerAction(ans));
  }

  createAnswer(element: string, answervalue: number | string): AnswerValue{
    let valuetype: string = typeof answervalue;
    let parsedInt: number = Number(answervalue);
    let parsedString: string = String(answervalue);

    return {
      element: element,
      value: {
        type: valuetype,
        valueAsInteger: parsedInt,
        valueAsString: parsedString
      }
    };
  }
}

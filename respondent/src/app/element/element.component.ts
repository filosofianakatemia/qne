import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';
import { LikertComponent } from './element.likert.component';
import { TextComponent } from './element.text.component';
import { TextareaComponent } from './element.textarea.component';
import { AnswerValue } from '../action/answer-value.model';
import { AnswerAction } from '../shared/shared.actions';

import * as fromRoot from '../shared/main.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'elements',
  template: `
    <div *ngFor="let element of elements">

        <p>uuid: {{element.uuid}}</p>
        <p>type {{element.type}}</p>
        <p>title: {{element.title}}</p>
        <p>description: {{element.description}}</p>
        <p>required: {{element.required}}</p>
        <p>instruction: {{element.instruction}}</p>

        <p>subcomponent:</p>
        <div *ngIf= "(element.type == 'likert')">
          <likert [element]="element" (answer)="addToAnswers($event)"></likert>
        </div>

        <div *ngIf= "(element.type == 'text')">
          <text [element]="element" (answer)="addToAnswers($event)"></text>
        </div>

        <div *ngIf= "(element.type == 'textarea')">
          <textareaSelector [element]="element" (answer)="addToAnswers($event)"></textareaSelector>
        </div>

        <div *ngIf= "(element.type == 'checkbox')">
          <checkbox [element]="element" (answer)="addToAnswers($event)"></checkbox>
        </div>
    <hr/>
    </div>
  `
})

export class ElementComponent{
  @Input() elements: QuestionElement[];
  constructor(private store: Store<fromRoot.State>){};

  addToAnswers($event: any){
    let ans: AnswerValue = this.createAnswer($event.element, $event.value);
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

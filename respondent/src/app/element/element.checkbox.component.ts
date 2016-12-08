import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionElement } from './element.model';
import { AnswerValue } from '../action/answer-value.model';

@Component({
    selector: 'checkbox',
    template: `
      <h3>{{element.title}}<span *ngIf="(element.required)==true">*</span></h3>
      <input type= "checkbox" [checked]="getAnswer(previousAnswer)" (click)="onChange()">
    `
})

export class CheckboxComponent{
  @Input() element: QuestionElement;
  @Input() previousAnswer: AnswerValue;
  @Output() answer = new EventEmitter<{element: string, value: string}>();
  private checked:boolean = false;

  getAnswer(ans: AnswerValue): boolean{
    let checked = (ans !== undefined) && (ans.value.valueAsString === "true");
    this.checked = checked;
    return checked;
  }

  onChange() {
    this.checked =! this.checked;
    let checkedbox: string = String(this.checked);
    this.answer.emit({element: this.element.uuid, value: checkedbox});
  }
}

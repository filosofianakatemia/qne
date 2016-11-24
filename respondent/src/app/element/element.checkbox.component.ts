import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'checkbox',
    template: `
      <h3>{{element.title}}<span *ngIf="(element.required)==true">*</span></h3>
      <input type= "checkbox" (click)= "onChange()">
    `
})

export class CheckboxComponent{
  @Input() element: QuestionElement;
  @Output() answer = new EventEmitter<{element: string, value: string}>();
  private checked:boolean = false; //Input from answers?
  constructor(){};

  onChange() {
    this.checked =! this.checked;
    let checkedbox: string = String(this.checked);
    this.answer.emit({element: this.element.uuid, value: checkedbox});
  }
}

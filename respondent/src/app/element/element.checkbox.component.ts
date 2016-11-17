import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'checkbox',
    template: `
      <h3>{{element.title}}</h3>
      <p *ngIf="(element.required)==true">*</p>
      <input type= "checkbox">
    `

})

export class CheckboxComponent{
  @Input() element: QuestionElement;
  constructor(){};
}

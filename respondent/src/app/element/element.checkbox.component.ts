import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'checkbox',
    template: `
        <input type= "checkbox">
        
    `

})

export class CheckboxComponent{
  @Input() element: QuestionElement;
  constructor(){};
}
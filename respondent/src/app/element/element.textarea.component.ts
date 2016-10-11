import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'textarea',
    template: `
        <input type= "textarea">
    `

})

export class TextareaComponent{
  @Input() element: QuestionElement;
  constructor(){};
}

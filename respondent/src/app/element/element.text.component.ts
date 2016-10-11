import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'text',
    template: `
        <input type= "text">
    `

})

export class TextComponent{
  @Input() element: QuestionElement;
  constructor(){};
}

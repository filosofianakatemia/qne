import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'text',
    template: `
        <input type= "text">
        <button type="button" class="success button">Submit</button>
    `

})

export class TextComponent{
  @Input() element: QuestionElement;
  constructor(){};
}

import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'text',
    template: `
        <div class="input-group"><input type= "text"><button>Submit</button></div>
    `

})

export class TextComponent{
  @Input() element: QuestionElement;
  constructor(){};
}

import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'textarea',
    template: `
        <input type= "textarea">
         <button type="submit" class="success button">Submit</button>
    `

})

export class TextareaComponent{
  @Input() element: QuestionElement;
  constructor(){};
}

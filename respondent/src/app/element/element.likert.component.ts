import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'likert',
    template: `
        <p>1-2-3-4-5</p>
    `

})

export class LikertComponent{
  @Input() element: QuestionElement;
  constructor(){};
}

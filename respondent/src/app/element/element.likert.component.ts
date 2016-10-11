import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'likert',
    template: `
        <P>This is likert</P>
        <p>12345</p>
    `

})

export class LikertComponent{
  @Input() element: QuestionElement;
  constructor(){};
}
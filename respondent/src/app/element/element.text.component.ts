import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'text',
    template: `
        <h3>{{element.title}}</h3>
        <p>{{element.description}}</p>
        <button class="success button">Out of order</button>
        <p>TODO: this button needs questionnaire.action</p>
    `
})

export class TextComponent{
  @Input() element: QuestionElement;
}

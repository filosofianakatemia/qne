import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'text',
    template: `
        <h3>{{element.title}}</h3>
    `
})

export class TextComponent{
  @Input() element: QuestionElement;
}

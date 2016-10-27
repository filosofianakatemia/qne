import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'text',
    template: `
        <input type="text" #box (keyup)="0">
        <button type="button" class="success button" (click)="answer.emit({element: element.uuid, value: box.value})">Submit</button>
    `

})

export class TextComponent{
  @Input() element: QuestionElement;
  @Output() answer = new EventEmitter<{element: string, value: number | string}>();
}

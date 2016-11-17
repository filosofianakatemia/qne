import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'textareaSelector',
    template: `
      <h3>{{element.title}}</h3>
      <p *ngIf="(element.required)==true">*</p>
      <textarea #box (keyup)="0"></textarea>
      <button type="button" class="success button" (click)="answer.emit({element: element.uuid, value: box.value})">Submit</button>
    `


})

export class TextareaComponent{
  @Input() element: QuestionElement;
  @Output() answer = new EventEmitter<{element: string, value: number | string}>();
}

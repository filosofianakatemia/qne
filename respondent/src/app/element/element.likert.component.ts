import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionElement } from './element.model';
import { AnswerValue } from '../action/answer-value.model';

@Component({
    selector: 'likert',
    template: `
        <h3>{{element.title}}</h3>
        <p *ngIf="(element.required)==true">*</p>
        <button type="submit" *ngFor="let value of [1,2,3,4,5]" class="button" (click)="answer.emit({element: element.uuid, value: value})">{{value}}</button>
    `

})

export class LikertComponent{
  @Input() element: QuestionElement;
  @Output() answer = new EventEmitter<{element: string, value: number | string}>();
}


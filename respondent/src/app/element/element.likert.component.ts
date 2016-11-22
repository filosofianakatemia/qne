import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionElement } from './element.model';
import { AnswerValue } from '../action/answer-value.model';

@Component({
    selector: 'likert',
    template: `
        <h3>{{element.title}}<span *ngIf="(element.required)==true">*</span></h3>
        <div class="button-group likert">
        <button type="submit" *ngFor="let value of [1,2,3,4,5]" class="button" (click)="answer.emit({element: element.uuid, value: value})">{{value}}</button>
        <div>
    `

})

export class LikertComponent{
  @Input() element: QuestionElement;
  @Output() answer = new EventEmitter<{element: string, value: number | string}>();
}


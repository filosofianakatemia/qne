import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
  selector: 'elements',
  template: `
    <div *ngFor="let element of elements">
        <p>{{element.uuid}}</p>
        <p>{{element.type}}</p>
        <p>{{element.title}}</p>
        <p>{{element.required}}</p>
        <p>{{element.instruction}}</p>
    </div>
  `
})

export class ElementComponent{
  @Input() elements: QuestionElement[];
  constructor(){};
}

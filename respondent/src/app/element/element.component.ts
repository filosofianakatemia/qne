import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';
import { LikertComponent } from './element.likert.component';
import { TextComponent } from './element.text.component';
import { TextareaComponent } from './element.textarea.component';



@Component({
  selector: 'elements',
  template: `
    <div *ngFor="let element of elements">
        <div ng-show= "element.type === 'likert'">
          <likert [element]="element"></likert>
        </div>

        <p>---</p>

        <div ng-show= "element.type === 'text'">
          <text [element]="element"></text>
        </div>

        <p>---</p>

        <div ng-show= "element.type === 'textarea'">
          <textarea [element]="element"></textarea>
        </div>

        <p>---</p>

        <div ng-show= "element.type === 'checkbox'">
          <checkbox [element]="element"></checkbox>
        </div>

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

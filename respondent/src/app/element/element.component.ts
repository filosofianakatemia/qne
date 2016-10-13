import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';
import { LikertComponent } from './element.likert.component';
import { TextComponent } from './element.text.component';
import { TextareaComponent } from './element.textarea.component';



@Component({
  selector: 'elements',
  template: `
    <div *ngFor="let element of elements">

        <p>uuid: {{element.uuid}}</p>
        <p>type {{element.type}}</p>
        <p>title: {{element.title}}</p>
        <p>description: {{element.description}}</p>
        <p>required: {{element.required}}</p>
        <p>instruction: {{element.instruction}}</p>

        <p>subcomponent:</p>
        <div *ngIf= "(element.type == 'likert')">
          <likert [element]="element"></likert>
        </div>

        <div *ngIf= "(element.type == 'text')">
          <text [element]="element"></text>
        </div>

        <div *ngIf= "(element.type == 'textarea')">
          <textarea [element]="element"></textarea>
        </div>

        <div *ngIf= "(element.type == 'checkbox')">
          <checkbox [element]="element"></checkbox>
        </div>
    <hr/>
    </div>
  `
})

export class ElementComponent{
  @Input() elements: QuestionElement[];
  constructor(){};
}

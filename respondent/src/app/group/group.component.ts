import { Component, Input } from '@angular/core';
import { QuestionGroup } from './group.model';

import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'groups',
  template: `
    <div *ngFor="let group of groups">
      <h1>{{group.type}}</h1>
      <h2>{{group.action}}</h2>

     <elements [elements]="group.elements"></elements>

    </div>
  `
})
export class GroupComponent {
  @Input() groups: QuestionGroup[];
  constructor(){};
}

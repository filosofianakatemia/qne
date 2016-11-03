import { Component, Input } from '@angular/core';
import { QuestionGroup } from './group.model';
import { UIGroup } from '../action/ui-group.model';
import { GroupFilterPipe } from '../shared/shared.utils';

import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'groups',
  template: `
    <div *ngFor="let group of (groups | groupFilter:currentGroup)">
      <h1>{{group.type}}</h1>
      <h2>{{group.action}}</h2>

     <elements [elements]="group.elements"></elements>

    </div>
  `
})
export class GroupComponent {
  @Input() groups: QuestionGroup[];
  @Input() currentGroup: UIGroup;
  constructor(){};
}

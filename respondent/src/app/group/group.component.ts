import { Component, Input } from '@angular/core';
import { QuestionGroup } from './group.model';
import { UIGroup } from '../action/ui-group.model';
import { GroupFilterPipe } from '../shared/shared.utils';

import { ElementComponent } from '../element/element.component';
import { Instruction } from '../instruction/instruction.model';

@Component({
  selector: 'groups',
  template: `
    <div *ngFor="let group of (groups | groupFilter:currentGroup)">
      <elements [elements]="group.elements" [instructions]="instructions"></elements>
    </div>
  `
})
export class GroupComponent {
  @Input() groups: QuestionGroup[];
  @Input() currentGroup: UIGroup;
  @Input() instructions: Instruction[];
  constructor(){};
}

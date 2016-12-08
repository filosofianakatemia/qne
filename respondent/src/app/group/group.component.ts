import { Component, Input } from '@angular/core';
import { QuestionGroup } from './group.model';
import { UIGroup } from '../action/ui-group.model';

import { Instruction } from '../instruction/instruction.model';
import { Action } from '../action/action.model';

import { NavigateAction } from '../shared/shared.actions';
import * as fromRoot from '../shared/main.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'groups',
  template: `
    <div *ngFor="let group of (groups | groupFilter:currentUIGroup)">
      <elements
        [elements]="group.elements"
        [instructions]="instructions"
        (navigate)="navigate($event)"
      ></elements>
      <div *ngIf="(group.type)==='action'">
        <app-action
          [action]="actions | actionFilter:group.action"
          (navigate)="navigate($event)"
        ></app-action>
      </div>
    </div>
  `
})
export class GroupComponent {
  @Input() groups: QuestionGroup[];
  @Input() currentUIGroup: UIGroup;
  @Input() instructions: Instruction[];
  @Input() actions: Action[];
  constructor(private store: Store<fromRoot.State>){};

  //Triggers navigation action when answer action is done in <elements>
  navigate($event){
    const direction = 1; //Positive direction
    const groups = this.groups;
    const currentUIGroup = this.currentUIGroup;

    const lastGroup = groups[groups.length-1];
    const lastElement = lastGroup.elements[lastGroup.elements.length-1];

    //Disable autonavigation from last element
    if(lastElement.uuid === currentUIGroup.currentElement.uuid){ }
    //Disable autonavigation with expanded type
    else if(currentUIGroup.type === "expanded"){ }
    else{
      this.store.dispatch(new NavigateAction({direction, groups, currentUIGroup}));
    }
  }
}


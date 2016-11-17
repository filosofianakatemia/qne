import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Questionnaire } from './questionnaire.model';
import { UIGroup } from '../action/ui-group.model';
import { GroupComponent } from '../group/group.component';
import { QuestionGroup } from '../group/group.model';
import { QuestionElement } from '../element/element.model';
import { NextElementAction, PreviousElementAction } from '../shared/shared.actions';

import * as fromRoot from '../shared/main.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'questionnaire',
  template: `
      <h1>{{questionnaire.title}}</h1>
      <p>{{questionnaire.description}}</p>

      <groups [groups]="questionnaire.groups" [currentGroup]="currentUIGroup" [instructions]=questionnaire.instructions></groups>
      <progressbar
        [groups]="questionnaire.groups"
        [currentGroup]="currentUIGroup"
        [hidePrevButton]="negativeBounds"
        [hideNextButton]="positiveBounds"
        (navigate)="navigate($event)">
      </progressbar>
  `
})

export class QuestionnaireComponent implements OnChanges{
  @Input() questionnaire: Questionnaire;
  @Input() currentUIGroup: UIGroup;
  negativeBounds:boolean;
  positiveBounds:boolean;

  constructor(private store: Store<fromRoot.State>){};

  ngOnChanges(changes: SimpleChanges) {
    this.toggleNavigationButtons(this.currentUIGroup);
  }

  toggleNavigationButtons(UIGroup:UIGroup){
    //Current state
    const groups: QuestionGroup[] = this.questionnaire.groups;
    const currentUIGroup: UIGroup = this.currentUIGroup;

    //Find last group and element
    const lastGroup: QuestionGroup = groups[groups.length-1];
    const lastElement: QuestionElement = lastGroup.elements[lastGroup.elements.length-1];

    //First and last element IDs
    const firstElementID = groups[0].elements[0].uuid;
    const lastElementID = lastElement.uuid;

    //Detect if we are at bounds
    this.negativeBounds = firstElementID === UIGroup.currentElement.uuid;
    this.positiveBounds =
      (lastElementID === UIGroup.currentElement.uuid) ||  //Last element of the array
      ((currentUIGroup.uuid === lastGroup.uuid) && (lastGroup.type === "expanded"));  //Or last group with type==="expanded"
  }

  navigate($event:number){
    //Movement direction within the array
    const direction: number = $event; // => -1 OR 1

    //Current state
    const groups: QuestionGroup[] = this.questionnaire.groups;
    const currentUIGroup: UIGroup = this.currentUIGroup;

    //Find current group and -element from questionnaire using values from currentUIGroup
    const currentGroup: QuestionGroup = groups.filter(g => g.uuid === currentUIGroup.uuid)[0];
    const currentElement: QuestionElement = currentGroup.elements.filter(e => e.uuid === currentUIGroup.currentElement.uuid)[0];

    //Find indexes for current group and element
    const currentGroupIdx: number = groups.indexOf(currentGroup);
    const currentElementIdx: number = groups[currentGroupIdx].elements.indexOf(currentElement);

    //Check if we are at the start or end of current group depending on the direction we are going
    const switchGroup: boolean =
      currentGroup.type === "expanded" ? true : //Always switch group if type is "expanded"
        direction < 0 ?
          currentElementIdx === 0 : //Switch if direction === -1 AND currentElementIdx === 0
          currentElementIdx === groups[currentGroupIdx].elements.length - 1; //Switch if direction === +1 AND currentElementIdx equals size of array

    //If we swich group, add the direction (-1 OR 1) to index
    const newGroupIdx: number = switchGroup ? currentGroupIdx + direction : currentGroupIdx;
    //New element index depending on direction and switchGroup
    const newElementIdx: number = direction < 0 ?
        switchGroup ? groups[newGroupIdx].elements.length - 1 : currentElementIdx + direction :
        switchGroup ? 0 : currentElementIdx + direction;

    //Create new UIGroup from Questionnaire using new indexes
    const nextUIGroup: UIGroup = {
      uuid: groups[newGroupIdx].uuid,
      type: groups[newGroupIdx].type,
      currentElement: {
        uuid: groups[newGroupIdx].elements[newElementIdx].uuid,
        required: groups[newGroupIdx].elements[newElementIdx].required
      }
    }

    console.log("index: ", newGroupIdx, newElementIdx);

    //Pass to reducer
    this.store.dispatch(new NextElementAction(nextUIGroup));
  }
}

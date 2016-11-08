import { Component, Input } from '@angular/core';

import { Questionnaire } from './questionnaire.model';
import { UIGroup } from '../action/ui-group.model';
import { GroupComponent } from '../group/group.component';
import { QuestionGroup } from '../group/group.model';
import { QuestionElement } from '../element/element.model';
import { NextElementAction } from '../shared/shared.actions';

import * as fromRoot from '../shared/main.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'questionnaire',
  template: `
      <h1>{{questionnaire.title}}</h1>
      <p>{{questionnaire.description}}</p>

      <groups [groups]="questionnaire.groups" [currentGroup]="currentUIGroup"></groups>
      <progressbar [groups]="questionnaire.groups" [currentGroup]="currentUIGroup" (prev)="prevElement($event)" (next)="nextElement($event)"></progressbar>
  `
})

export class QuestionnaireComponent {
  @Input() questionnaire: Questionnaire;
  @Input() currentUIGroup: UIGroup;
  constructor(private store: Store<fromRoot.State>){};

  prevElement($event:any){

  }
  nextElement($event:any){
    //TODO: Check if we are at the end of questionnaire

    //Current state
    const groups: QuestionGroup[] = this.questionnaire.groups;
    const currentUIGroup: UIGroup = this.currentUIGroup;

    //Find current group and -element from questionnaire using values from currentUIGroup
    const currentGroup: QuestionGroup = groups.filter(g => g.uuid === currentUIGroup.uuid)[0];
    const currentElement: QuestionElement = currentGroup.elements.filter(e => e.uuid === currentUIGroup.currentElement.uuid)[0];

    //Find indexes for current group and element
    const currentGroupIdx: number = groups.indexOf(currentGroup);
    const currentElementIdx: number = groups[currentGroupIdx].elements.indexOf(currentElement);
    console.log("currentIdx: ", currentGroupIdx, currentElementIdx);

    //Check if we are at the end of current group
    const movetoNextGroup: boolean = groups[currentGroupIdx].elements.length - 1 === currentElementIdx;
    console.log("movetoNextGroup: ", movetoNextGroup);

    //Get next indexes for UIGroup
    const nextGroupIdx: number = movetoNextGroup ? currentGroupIdx + 1 : currentGroupIdx;
    const nextElementIdx: number = movetoNextGroup ? 0 : currentElementIdx + 1;
    console.log("nextIdx: ", nextGroupIdx, nextElementIdx);

    //Create new UIGroup from Questionnaire using new indexes
    const nextUIGroup: UIGroup = {
      uuid: groups[nextGroupIdx].uuid,
      type: groups[nextGroupIdx].type,
      currentElement: {
        uuid: groups[nextGroupIdx].elements[nextElementIdx].uuid,
        required: groups[nextGroupIdx].elements[nextElementIdx].required
      }
    }
    console.log(nextUIGroup);

    //Pass to reducer
    this.store.dispatch(new NextElementAction(nextUIGroup));
  }
}

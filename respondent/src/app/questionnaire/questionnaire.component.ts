import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Questionnaire } from './questionnaire.model';
import { UIGroup } from '../action/ui-group.model';
import { GroupComponent } from '../group/group.component';
import { QuestionGroup } from '../group/group.model';
import { QuestionElement } from '../element/element.model';
import { AnswerValue } from '../action/answer-value.model';
import { NavigateAction } from '../shared/shared.actions';

import * as fromRoot from '../shared/main.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'questionnaire',
  template: `
      <h1>{{questionnaire.title}}</h1>
      <hr>

      <groups
        [groups]="questionnaire.groups"
        [currentUIGroup]="currentUIGroup"
        [instructions]="questionnaire.instructions" (click)="questionHasBeenAnswered()"
      ></groups>

      <progressbar
        [groups]="questionnaire.groups"
        [currentGroup]="currentUIGroup"
        [hidePrevButton]="negativeBounds"
        [hideNextButton]="positiveBounds"
        [answeredQuestions]="answeredQuestions"
        (navigate)="navigate($event)">
      </progressbar>
  `
})

export class QuestionnaireComponent implements OnChanges{
  @Input() questionnaire: Questionnaire;
  @Input() currentUIGroup: UIGroup;
  @Input() answers: AnswerValue[];
  answeredQuestions:number=0;
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
    const answers: AnswerValue[] = this.answers;

    //Find last group and element
    const lastGroup: QuestionGroup = groups[groups.length-1];
    const lastElement: QuestionElement = lastGroup.elements[lastGroup.elements.length-1];

    //First and last element IDs
    const firstElementID = groups[0].elements[0].uuid;
    const lastElementID = lastElement.uuid;


    //Find current group and -element from questionnaire using values from currentUIGroup
    const currentGroup: QuestionGroup = groups.filter(g => g.uuid === currentUIGroup.uuid)[0];
    const currentElement: QuestionElement = currentGroup.elements.filter(e => e.uuid === currentUIGroup.currentElement.uuid)[0];
    //Find out if currentElement is answered
    const currentAnswer: AnswerValue = answers.filter(a => a.element === currentElement.uuid)[0];

    //Detect if we are at bounds
    this.negativeBounds = firstElementID === UIGroup.currentElement.uuid;
    this.positiveBounds =
      (currentElement.required && currentAnswer === undefined) || //Current element required and not answered
      (lastElementID === UIGroup.currentElement.uuid) ||  //Last element of the array
      ((currentUIGroup.uuid === lastGroup.uuid) && (lastGroup.type === "expanded"));  //Or last group with type==="expanded"
  }

  questionHasBeenAnswered(){
    this.answeredQuestions = this.answers.length;
  }

  navigate($event:number){
    //Movement direction within the array
    const direction: number = $event; // => -1 OR 1

    //Current state
    const groups: QuestionGroup[] = this.questionnaire.groups;
    const currentUIGroup: UIGroup = this.currentUIGroup;

    //Pass to reducer
    this.store.dispatch(new NavigateAction({direction, groups, currentUIGroup}));
  }
}

import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Questionnaire } from './questionnaire.model';
import { UIGroup } from '../action/ui-group.model';
import { GroupComponent } from '../group/group.component';
import { QuestionGroup } from '../group/group.model';
import { QuestionElement } from '../element/element.model';
import { AnswerValue } from '../action/answer-value.model';
import { NavigateAction, CompletionAction } from '../shared/shared.actions';

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
        [instructions]="questionnaire.instructions"
        [actions]="questionnaire.actions"
        [answers]="answers">
      </groups>

      <summary
        [hidden]="true"
        [answers]="answers"
        [groups]="questionnaire.groups">
      </summary>

      <progressbar
        [groups]="questionnaire.groups"
        [currentGroup]="currentUIGroup"
        [hidePrevButton]="negativeBounds"
        [hideNextButton]="positiveBounds"
        [answeredQuestions]="requiredAnswers"
        (navigate)="navigate($event)">
      </progressbar>
  `
})

export class QuestionnaireComponent implements OnChanges{
  @Input() questionnaire: Questionnaire;
  @Input() currentUIGroup: UIGroup;
  @Input() answers: AnswerValue[];
  requiredElements: QuestionElement[];
  requiredAnswers: AnswerValue[] = [];

  negativeBounds:boolean = true;
  positiveBounds:boolean = false;
  isCompleted:boolean = false;
  showSummary:boolean = false;

  constructor(private store: Store<fromRoot.State>){};

  ngOnChanges(changes: SimpleChanges) {
    this.requiredElements = this.getRequiredElements(this.questionnaire.groups);
    this.requiredAnswers = this.getRequiredAnswers(this.requiredElements, this.answers);
    this.isCompleted = this.checkCompletion(this.requiredElements, this.requiredAnswers);
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
      (currentGroup.type !== "action" &&
        currentElement.required &&
        currentAnswer === undefined) || //Current element required and not answered
      (lastElementID === UIGroup.currentElement.uuid) ||          //Last element of the array
      ((currentUIGroup.uuid === lastGroup.uuid) && (lastGroup.type === "expanded"));  //Or last group with type==="expanded"
  }

  navigate($event:number){
    /*Movement direction within the array
    -1 => Previous question
     1 => Next question
     0 => Summary page
    */
    const direction: number = $event;
    const groups: QuestionGroup[] = this.questionnaire.groups;
    const currentUIGroup: UIGroup = this.currentUIGroup;
    if(direction === 0) this.showSummary = true              //Navigate to summary
    else if(this.showSummary === true && direction === -1){  //Navigate backwards from summary
      this.showSummary = false;
    }else{
      //Pass to reducer
      this.store.dispatch(new NavigateAction({direction, groups, currentUIGroup}));
    }
  }

  getRequiredElements(groups:QuestionGroup[]): QuestionElement[] {
    let elems: QuestionElement[] = [];
    for(let group of groups){ elems = elems.concat(group.elements); }
    elems = elems.filter(e => e.required===true);
    return elems;
  }
  getRequiredAnswers(requiredElements: QuestionElement[], answers: AnswerValue[]): AnswerValue[]{
    let requiredAnswers: AnswerValue[] = [];
    for(let elem of requiredElements){
      requiredAnswers = requiredAnswers.concat(answers.filter(a => a.element === elem.uuid));
    }
    return requiredAnswers;
  }

  checkCompletion(requiredElements:QuestionElement[], requiredAnswers:AnswerValue[]){
    const isCompleted: boolean = requiredElements.length === requiredAnswers.length;
    if(isCompleted) this.store.dispatch(new CompletionAction(isCompleted));
    return isCompleted;
  }


}

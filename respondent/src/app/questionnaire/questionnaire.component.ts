import { Component, Input } from '@angular/core';
import { Questionnaire } from './questionnaire.model';
import { UIGroup } from '../action/ui-group.model';

import { GroupComponent } from '../group/group.component';


@Component({
  selector: 'questionnaire',
  template: `
      <h1>{{questionnaire.title}}</h1>
      <p>{{questionnaire.description}}</p>

      <groups [groups]="questionnaire.groups" [currentGroup]="currentGroup"></groups>
      <progressbar [groups]="questionnaire.groups" [currentGroup]="currentGroup" (prev)="prevElement($event)" (next)="nextElement($event)"></progressbar>
  `
})

export class QuestionnaireComponent {
  @Input() questionnaire: Questionnaire;
  @Input() currentGroup: UIGroup;

  prevElement($event:any){
    const groups = this.questionnaire.groups;
    console.log("prev");
  }
  nextElement($event:any){
    const groups = this.questionnaire.groups;
    console.log("next");
  }
}

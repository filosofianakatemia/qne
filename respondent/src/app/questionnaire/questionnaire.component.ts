import { Component, Input } from '@angular/core';
import { Questionnaire } from './questionnaire.model';

import { GroupComponent } from '../group/group.component';


@Component({
  selector: 'questionnaire',
  template: `
      <h1>{{questionnaire.title}}</h1>
      <p>{{questionnaire.description}}</p>

      <groups [groups]="questionnaire.groups"></groups>
  `
})

export class QuestionnaireComponent {
  @Input() questionnaire: Questionnaire;
}

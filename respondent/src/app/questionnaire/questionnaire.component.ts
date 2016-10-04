import { Component, Input } from '@angular/core';
import { Questionnaire } from './questionnaire.model';
import { Store } from '@ngrx/store';
import { State } from '../shared/shared.state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'questionnaire',
  template: `
    <div *ngFor="let questionLocalized of questionnaire.i18n">
      <h1>{{questionLocalized.title}}</h1>
      <p>{{questionLocalized.description}}</p>
    </div>
  `
})

export class QuestionnaireComponent {
  @Input() questionnaire: Questionnaire;
}

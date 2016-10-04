import { Component, Input } from '@angular/core';
import { Questionnaire } from './questionnaire.model';
import { Store } from '@ngrx/store';
import { State } from '../shared/shared.state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'questionnaire-wrapper',
  template: `
    <questionnaire [questionnaire]="questionnaire$ | async"></questionnaire>
  `
})

export class QuestionnaireWrapperComponent {
  public questionnaire$: Observable<Questionnaire>;

  constructor(
     private _store: Store<State>
    ){
      /*
        Observable of questionnaire, utilzing the async pipe
        in our templates this will be subscribed to, with
        new values being dispayed in our template.
        Unsubscribe wil be called automatically when component
        is disposed.
      */
      this.questionnaire$ = _store.select(s => s.questionnaire.questionnaire);
    }
}

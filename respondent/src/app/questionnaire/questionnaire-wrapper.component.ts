import { Component, Input } from '@angular/core';
import { Questionnaire } from './questionnaire.model';
import { UIGroup } from '../action/ui-group.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../shared/main.reducer';
import { Observable } from 'rxjs/Observable';

import { ProgressbarComponent } from '../shared/progressbar.component';

@Component({
  selector: 'questionnaire-wrapper',
  template: `
    <questionnaire [questionnaire]="questionnaire$ | async" [currentGroup]="ui$ | async"></questionnaire>
  `
})

export class QuestionnaireWrapperComponent {
  public questionnaire$: Observable<Questionnaire>;
  public ui$: Observable<UIGroup>;

  constructor(private store: Store<fromRoot.State>){
      /*
        Observables of questionnaire and ui, utilzing the async pipe
        in our templates this will be subscribed to, with
        new values being dispayed in our template.
        Unsubscribe will be called automatically when component
        is disposed.
      */
      this.questionnaire$ = this.store.let(fromRoot.getQuestionnaire);
      this.ui$ = this.store.let(fromRoot.getCurrentUIGroup);
    }
}

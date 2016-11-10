import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Questionnaire } from './questionnaire/questionnaire.model';

import * as fromRoot from './shared/main.reducer';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questionnaire$: Observable<Questionnaire>;

  constructor(store: Store<fromRoot.State>) {
    this.questionnaire$ = store.let(fromRoot.getQuestionnaire);
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import '../../public/css/styles.css';
import { Observable } from 'rxjs/Observable';
import { Questionnaire } from './questionnaire/questionnaire.model';
import { getQuestionnaire } from './shared/shared.reducers';
import { State } from './shared/shared.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questionnaire$: Observable<Questionnaire>;

  constructor(store: Store<State>) {
    this.questionnaire$ = store.let(getQuestionnaire);
  }
}

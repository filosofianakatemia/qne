import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/let';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { QuestionnaireService } from './questionnaire/questionnaire.service';
import * as fromRoot from './shared/main.reducer';
//import { getAppLoaded } from './shared/shared.reducers';
import * as actions from './shared/shared.actions';

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.State>,
    private questionnaireService: QuestionnaireService,
    private router: Router
  ) { }

  /**
   * This method loads a quesionnaire with the given ID from the API, returning
   * `true` or `false` if it was found.
   */
  getQuestionnaireFromAPI(id: string): Observable<boolean> {
    return this.questionnaireService.getQuestions()
      .map(questionnaireEntity => new actions.LoadAction(questionnaireEntity))
      .do(action => this.store.dispatch(action))
      .map(questionnaire => !!questionnaire)
      .catch(() => {
        this.router.navigate(['/404']);
        return of(false);
      });
  }

  /**
   * This is the actual method the router will call when our guard is run.
   *
   * Our guard waits for the collection to load, then it checks if we need
   * to request a book from the API or if we already have it in our cache.
   * If it finds it in the cache or in the API, it returns an Observable
   * of `true` and the route is rendered successfully.
   *
   * If it was unable to find it in our cache or in the API, this guard
   * will return an Observable of `false`, causing the router to move
   * on to the next candidate route. In this case, it will move on
   * to the 404 page.
   */

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.getQuestionnaireFromAPI(route.params['questionnaire_id']);
  }
}

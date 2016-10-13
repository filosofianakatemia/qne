/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';
import { Observable } from 'rxjs/Observable';
import { Actions, ActionTypes } from '../shared/shared.actions';
import { Questionnaire } from '../questionnaire/questionnaire.model';
import '@ngrx/core/add/operator/select';


export interface State {
  questionnaire: Questionnaire;
  loaded: boolean;
};
export const initialState: State = {
  questionnaire: undefined,
  loaded: false
};


export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD: {
      return {
          questionnaire: action.payload,
          loaded: true
      };
    }
    default: {
      return state;
    }
  }
}

export function getQuestionnaireLoaded(state$: Observable<State>) {
  return state$.select(s => s.loaded);
}
export function getQuestionnaire(state$: Observable<State>) {
  return state$.select(s => s.questionnaire);
}






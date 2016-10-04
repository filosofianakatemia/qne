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
import { State, initialState, QuestionnaireState } from './shared.state';
import { Actions, ActionTypes } from './shared.actions';

export const getAppLoaded = compose(getQuestionnaireLoaded, getQuestionnaireState);

export function getQuestionnaireState(state$: Observable<State>) {
  return state$.select(s => s.questionnaire);
}

function getQuestionnaireLoaded(questionnaireState$: Observable<QuestionnaireState>) {
  return questionnaireState$.select(s => s.loaded);
}

export function getQuestionnaire(state$: Observable<State>) {
  return state$.select(state => state.questionnaire.questionnaire);
}

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD: {
      return {
        questionnaire: {
          questionnaire: action.payload,
          loaded: true
        }
      };
    }
    default: {
      return state;
    }
  }
}



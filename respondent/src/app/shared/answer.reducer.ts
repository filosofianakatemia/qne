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
import '@ngrx/core/add/operator/select';
import { AnswerValue } from '../action/answer-value.model';


export interface State{
  values: Observable<AnswerValue>[];
  completed: boolean;
};
export const initialState: State = {
  values: undefined,
  completed: false
};


export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ANSWER: {

      const answer = action.payload;
      const newState:State =
      Object.assign({}, state, {
        values: answer,
        completed: false
      });

      console.log(newState);
      return newState;

    }
    default: {
      return state;
    }
  }
}

export function getCompleted(state$: Observable<State>) {
  return state$.select(s => s.completed);
}
export function getAnswerValues(state$: Observable<State>) {
  return state$.select(s => s.values);
}

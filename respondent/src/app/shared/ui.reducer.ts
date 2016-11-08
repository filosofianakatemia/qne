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
import { UIGroup } from '../action/ui-group.model';
import '@ngrx/core/add/operator/select';


export interface State {
  currentGroup: UIGroup,
  errors: string[]
};

export const initialState: State = {
  currentGroup: undefined,
  errors: undefined
};


export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD: {
      const firstGroup = action.payload.groups[0];
      const firstElement = firstGroup.elements[0];

      const newState: State = {
        currentGroup: {
          uuid: firstGroup.uuid,
          type: firstGroup.type,
          currentElement: {
            uuid: firstElement.uuid,
            required: firstElement.required
          }
        },
        errors: []
      }
      console.log("uistate:", newState);
      return newState;
    }
    case ActionTypes.TO_PREVIOUS_ELEMENT:
    case ActionTypes.TO_NEXT_ELEMENT: {
      const group = action.payload;
      const newState: State = {
        currentGroup: {
          uuid: group.uuid,
          type: group.type,
          currentElement: {
            uuid: group.currentElement.uuid,
            required: group.currentElement.required
          }
        },
        errors: [] //TODO
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}

export function getCurrentGroup(state$: Observable<State>){
  return state$.select(s => s.currentGroup);
}
export function getErrors(state$: Observable<State>){
  return state$.select(s => s.errors);
}

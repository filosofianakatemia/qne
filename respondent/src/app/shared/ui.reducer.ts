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
import { QuestionGroup } from '../group/group.model';
import { QuestionElement } from '../element/element.model'
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
      return newState;
    }
    case ActionTypes.NAVIGATE: {
      const direction = action.payload.direction;
      const groups = action.payload.groups;
      const currentUIGroup = action.payload.currentUIGroup;

      //Find current group and -element from questionnaire using values from currentUIGroup
      const currentGroup: QuestionGroup = groups.filter(g => g.uuid === currentUIGroup.uuid)[0];
      const currentElement: QuestionElement = currentGroup.elements.filter(e => e.uuid === currentUIGroup.currentElement.uuid)[0];

      //Find indexes for current group and element
      const currentGroupIdx: number = groups.indexOf(currentGroup);
      const currentElementIdx: number = groups[currentGroupIdx].elements.indexOf(currentElement);

      //Check if we are at the start or end of current group depending on the direction we are going
      const switchGroup: boolean =
        currentGroup.type === "expanded" ? true : //Always switch group if type is "expanded"
          direction < 0 ?
            currentElementIdx === 0 : //Switch if direction === -1 AND currentElementIdx === 0
            currentElementIdx === groups[currentGroupIdx].elements.length - 1; //Switch if direction === +1 AND currentElementIdx equals size of array

      //If we swich group, add the direction (-1 OR 1) to index
      const newGroupIdx: number = switchGroup ? currentGroupIdx + direction : currentGroupIdx;
      //New element index depending on direction and switchGroup
      const newElementIdx: number = direction < 0 ?
          switchGroup ? groups[newGroupIdx].elements.length - 1 : currentElementIdx + direction :
          switchGroup ? 0 : currentElementIdx + direction;

      const newState: State = {
        currentGroup: {
          uuid: groups[newGroupIdx].uuid,
          type: groups[newGroupIdx].type,
          currentElement: {
            uuid: groups[newGroupIdx].elements[newElementIdx].uuid,
            required: groups[newGroupIdx].elements[newElementIdx].required
          }
        },
        errors: []
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

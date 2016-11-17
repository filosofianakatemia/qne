import { Action } from '@ngrx/store';
import { Questionnaire } from '../questionnaire/questionnaire.model';
import { AnswerValue } from '../action/answer-value.model';
import { UIGroup } from '../action/ui-group.model';
import { type } from './shared.utils';
import { QuestionGroup } from '../group/group.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  LOAD:                type('[Questionnaire] Load'),
  ANSWER:              type('[Answer] Answer'),
  TO_NEXT_ELEMENT:     type('[UIGroup] Next'),
  TO_PREVIOUS_ELEMENT: type('[UIGroup] Previous'),
  NAVIGATE:            type('[Object] Navigate')
// SUBMIT:           type('[SUBMIT] Submit')
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Questionnaire) { }
}

export class AnswerAction implements Action {
  type = ActionTypes.ANSWER;

  constructor(public payload: AnswerValue) {}
}
export class NextElementAction implements Action {
  type = ActionTypes.TO_NEXT_ELEMENT;

  constructor(public payload: UIGroup) {}
}
export class PreviousElementAction implements Action {
  type = ActionTypes.TO_PREVIOUS_ELEMENT;

  constructor(public payload: UIGroup) {}
}
export class NavigateAction implements Action {
  type = ActionTypes.NAVIGATE;

  constructor(public payload: {direction:number, groups:QuestionGroup[], currentUIGroup: UIGroup}) {}
}
/*
export class SubmitAction implements Action {
  type = ActionTypes.SUBMIT;

  constructor(public payload: Submit) {}
}
*/

/**
 * Exxport a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction
  | AnswerAction
  | NextElementAction
  | PreviousElementAction
  | NavigateAction;


/*
  | SubmitAction;
*/

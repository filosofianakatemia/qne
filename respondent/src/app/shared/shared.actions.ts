import { Action } from '@ngrx/store';
import { Questionnaire } from '../questionnaire/questionnaire.model';
import { type } from './shared.utils';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  LOAD:             type('[Questionnaire] Load')
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

/**
 * Exxport a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction;
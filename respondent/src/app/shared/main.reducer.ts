import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';

import * as fromQuestionnaire from './questionnaire.reducer';
import * as fromAnswer from './answer.reducer';

export interface State{
  questionnaire: fromQuestionnaire.State,
  answers: fromAnswer.State
};

const reducers = {
  questionnaire: fromQuestionnaire.reducer,
  answers: fromAnswer.reducer
};

export function reducer(state: any, action: any){
  const reducer: ActionReducer<State> = combineReducers(reducers);
  return reducer(state, action);
};

//Questionnaire
export const getQuestionnaireState = (state$: Observable<State>) =>
  state$.select(s => s.questionnaire);

export const getQuestionnaire = compose(fromQuestionnaire.getQuestionnaire, getQuestionnaireState);
export const getQuestionnaireLoaded = compose(fromQuestionnaire.getQuestionnaireLoaded, getQuestionnaireState);

//Answers
export const getAnswerState = (state$: Observable<State>) =>
  state$.select(s => s.answers);

export const getAnswersCompleted = compose(fromAnswer.getCompleted, getAnswerState);
export const getAnswerValues = compose(fromAnswer.getAnswerValues, getAnswerState);

import { Questionnaire } from '../questionnaire/questionnaire.model';
import * as fromRouter from '@ngrx/router-store';

export const initialQuestionnaireState: QuestionnaireState = {
  questionnaire: undefined,
  loaded: false
};

export interface QuestionnaireState {
  questionnaire: Questionnaire;
  loaded: boolean;
}

export const initialState: State = {
  questionnaire: initialQuestionnaireState
};

export interface State {
  questionnaire: QuestionnaireState;
  /* TODO
  answers: AnswerState;
  ui: UIState;*/
  //router: fromRouter.RouterState;
}




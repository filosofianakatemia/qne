import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Questionnaire } from './questionnaire.model';

@Injectable()
export class QuestionnaireService {
  mode = 'Observable';

  private _apiUrl: string;

  constructor(private _http: Http) {
    this._apiUrl = 'http://localhost:3004/test-questionnaire';
  }

  private static handleError (error: any) {
    // @TODO replace with real logging
    const errMsg = error.message
      ? error.message
      : error.status
        ? `${error.status} - ${error.statusText}`
        : 'Server error';

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getQuestions(): Observable<Questionnaire> {
    return this._http.get(this._apiUrl)
      .map(response => <Questionnaire>response.json())
      .catch(QuestionnaireService.handleError);
  }
}

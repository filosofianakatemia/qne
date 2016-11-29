import { Component, Input, OnInit } from '@angular/core';
import { AnswerValue } from '../action/answer-value.model';
import { QuestionElement } from '../element/element.model';
import { QuestionGroup } from '../group/group.model';

@Component({
    selector: 'summary',
    template: `
        <div *ngFor="let group of groups">
            <div *ngFor="let elem of group.elements">

            </div>
            <br/>
        </div>
        <button type="submit">Save answers</button>
    `

})

export class SummaryComponent{
  @Input() answers: AnswerValue[];
  @Input() groups: QuestionGroup[];

  getElementAnswer(uuid:string): AnswerValue{

      return null;
  }
}


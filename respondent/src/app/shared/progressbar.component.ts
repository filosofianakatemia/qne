import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UIGroup } from '../action/ui-group.model';
import { QuestionGroup } from '../group/group.model';
import { AnswerValue } from '../action/answer-value.model';

@Component({
    selector: 'progressbar',
    template: `
        <div class="row">
        <div class="large-8 columns">
        <div class="progress"  role="progressbar" tabindex="0" aria-valuenow="20" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
          <span class="progress-meter">
            <p class="progress-meter-text">{{answeredQuestions}}/{{amountOfQuestions.length}}</p>
          </span>
        </div>
        </div>
        <div class="large-4 columns">
        <div class="expanded button-group">
            <button class="button" [disabled]="hidePrevButton" (click)="navigate.emit(-1)" (click)="questionNumberMinusOne()">Previous</button>
            <button class="button" [disabled]="hideNextButton" (click)="navigate.emit(1)" (click)="questionNumberPlusOne()">Next</button>
        </div>
        </div>
        </div>
    `
})
export class ProgressbarComponent implements OnInit {
    @Input() currentGroup: UIGroup;
    @Input() groups: QuestionGroup[];
    @Input() hidePrevButton: boolean;
    @Input() hideNextButton: boolean;
    @Output() navigate: EventEmitter<number> = new EventEmitter<number>();
    @Input() answeredQuestions:number = 0;

    questionNumber:number = 0;
    amountOfQuestions:number[] = [];
    allQuestions:number;
    progBarLength:string = '0%';
    answerProgress:any;
    //answeredQuestions:number = 0;

    ngOnInit(){
        for(let i = 0; i < this.groups.length; i++) {
            for(let x = 0; x < this.groups[i].elements.length; x++) {
                this.amountOfQuestions.push(x);
            }
        }
        this.allQuestions = this.amountOfQuestions.length;
        this.answerProgress = (this.questionNumber / this.amountOfQuestions.length) * 100;
    }

    questionNumberPlusOne(){
        //console.log(this.answers);
        let expanded = this.currentGroup.type.toString();
        if(expanded != "expanded") {
            this.questionNumber++;
        } else {
            this.questionNumber = this.questionNumber + 2;
        }
        this.answerProgress = (this.questionNumber / this.amountOfQuestions.length) * 100;
        this.progBarLength = '' + this.answerProgress + '%';
    }
    questionNumberMinusOne() {
        let expanded = this.currentGroup.type.toString();
        if(expanded != "expanded") {
            this.questionNumber--;
        } else {
            this.questionNumber = this.questionNumber - 2;
        }
        this.answerProgress = (this.questionNumber / this.amountOfQuestions.length) * 100;
        this.progBarLength = '' + this.answerProgress + '%';
    }

}

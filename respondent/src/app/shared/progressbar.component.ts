import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UIGroup } from '../action/ui-group.model';
import { QuestionGroup } from '../group/group.model';

@Component({
    selector: 'progressbar',
    template: `
        <div class="button-group">
            <button class="button" [disabled]="hidePrevButton" (click)="navigate.emit(-1)" (click)="questionNumberMinusOne()">Previous</button>
            <button class="button" [disabled]="hideNextButton" (click)="navigate.emit(1)" (click)="questionNumberPlusOne()">Next</button>
        </div>
        <div class="progress" role="progressbar" tabindex="0" aria-valuenow="20" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
          <span class="progress-meter" [style.width]="progBarLength" >
            <p class="progress-meter-text">{{questionNumber}}/{{amountOfQuestions.length}}</p>
          </span>
        </div>
        <!--<div>currentElement: {{currentGroup.currentElement.uuid}}</div>
        <div *ngFor="let group of groups">
          <p>{{group.type}}</p>
        </div>-->
    `
})
//aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
//style="width:25%; background-color:black; height:50px;"
export class ProgressbarComponent{
  @Input() currentGroup: UIGroup;
  @Input() groups: QuestionGroup[];
  @Input() hidePrevButton: boolean;
  @Input() hideNextButton: boolean;
  @Output() navigate: EventEmitter<number> = new EventEmitter<number>();


    progBarLength:string = '25%';
    questionNumber:number = 1;
    amountOfQuestions:number[] = [];
    allQuestions:number;

    ngOnInit(){
        for(let i = 0; i < this.groups.length; i++) {
            for(let x = 0; x < this.groups[i].elements.length; x++) {
                this.amountOfQuestions.push(x);
            }
        }
        console.log(this.amountOfQuestions);
        this.allQuestions = this.amountOfQuestions.length;
    }

    questionNumberPlusOne(){
        let expanded = this.currentGroup.type.toString();
        if(expanded != "expanded") {
            this.questionNumber++;
        } else {
            this.questionNumber = this.questionNumber + 2;
        }
    }
    questionNumberMinusOne() {
        let expanded = this.currentGroup.type.toString();
        if(expanded != "expanded") {
            this.questionNumber--;
        } else {
            this.questionNumber = this.questionNumber - 2;
        }
    }

}

import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { UIGroup } from '../action/ui-group.model';
import { QuestionGroup } from '../group/group.model';
import { AnswerValue } from '../action/answer-value.model';

@Component({
    selector: 'progressbar',
    template: `
        <div class="row">
          <div class="large-8 columns">
            <div class="progress"  role="progressbar" tabindex="0" aria-valuenow="20" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
              <span class="progress-meter"[style.width]="progBarLength">
                <span class="progress-meter-text">{{requiredAnswers.length}}/{{elems.length}}</span>
              </span>
            </div>
          </div>
          <div class="large-4 columns">
            <div class="expanded button-group">
                <button class="button" [disabled]="hidePrevButton" (click)="navigate.emit(-1)">Previous</button>
                <button class="button" [disabled]="hideNextButton" (click)="navigate.emit(1)">Next</button>

                <button class="submit button" [hidden]="!isCompleted" (click)="submit.emit(null)">Submit</button>
            </div>
          </div>
        </div>
    `
})
export class ProgressbarComponent {
    @Input() currentGroup: UIGroup;
    @Input() groups: QuestionGroup[];
    @Input() hidePrevButton: boolean;
    @Input() hideNextButton: boolean;
    @Input() requiredAnswers: AnswerValue[];
    @Input() isCompleted: boolean; //Questionnaire completion

    @Output() navigate: EventEmitter<number> = new EventEmitter<number>();
    @Output() submit: EventEmitter<null> = new EventEmitter<null>();
    elems:any = []  //Attribute for storing all elements (regardless of requirement)
    progBarLength:string = '0%';

    ngOnChanges(changes: SimpleChanges) {
        const group = this.groups.filter(g => g.uuid === this.currentGroup.uuid)[0];
        const element = group.elements.filter(e => e.uuid === this.currentGroup.currentElement.uuid)[0];

        this.elems = [];
        for(let group of this.groups){ this.elems = this.elems.concat(group.elements); }
        const currentPos = this.elems.indexOf(element);
        this.progBarLength = (currentPos * (100/this.elems.length)) + '%';
    }
}

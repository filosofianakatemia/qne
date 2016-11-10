import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UIGroup } from '../action/ui-group.model';
import { QuestionGroup } from '../group/group.model';

@Component({
    selector: 'progressbar',
    template: `
        <!-- TODO:
        <div class="progress-meter" style="width: 25%">
            <p class="progress-meter-text">25%</p>
        </div>
        -->
        <div class="button-group">
            <button class="button" [disabled]="hidePrevButton" (click)="navigate.emit(-1)">Previous</button>
            <button class="button" [disabled]="hideNextButton" (click)="navigate.emit(1)">Next</button>
        </div>
    `
})

export class ProgressbarComponent{
  @Input() currentGroup: UIGroup;
  @Input() groups: QuestionGroup[];
  @Input() hidePrevButton: boolean;
  @Input() hideNextButton: boolean;
  @Output() navigate: EventEmitter<number> = new EventEmitter<number>();
}

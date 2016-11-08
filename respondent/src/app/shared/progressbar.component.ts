import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UIGroup } from '../action/ui-group.model';
import { QuestionGroup } from '../group/group.model';

@Component({
    selector: 'progressbar',
    template: `
        <div class="progress-meter" style="width: 25%">
            <p class="progress-meter-text">25%</p>
        </div>
        <div class="button-group">
            <button class="button" (click)="prev.emit(null)">Previous</button>
            <button class="button" (click)="next.emit(null)">Next</button>
        </div>
        <div>currentGroup: {{currentGroup.uuid}}</div>
        <div>currentElement: {{currentGroup.currentElement.uuid}}</div>
        <div *ngFor="let group of groups">
          <p>{{group.uuid}}, {{group.type}}</p>
        </div>
    `
})

export class ProgressbarComponent{
  @Input() currentGroup: UIGroup;
  @Input() groups: QuestionGroup[];
  @Output() prev: EventEmitter<any> = new EventEmitter<any>();
  @Output() next: EventEmitter<any> = new EventEmitter<any>();
}

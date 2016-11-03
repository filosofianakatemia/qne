import { Component, Input } from '@angular/core';
import { UIGroup } from '../action/ui-group.model';

@Component({
    selector: 'progressbar',
    template: `
        <div class="progress-meter" style="width: 25%">
            <p class="progress-meter-text">25%</p>
        </div>
        <div class="button-group">
            <button class="button">Previous</button>
            <button class="button">Next</button>
        </div>
        <div>currentElement: {{currentGroup.currentElement.uuid}}</div>
    `
})

export class ProgressbarComponent{
  @Input() currentGroup: UIGroup;
}

import {Component} from '@angular/core';

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
    `
})

export class ProgressbarComponent{

}
import { Component, Input } from '@angular/core';
import { QuestionElement } from './element.model';

@Component({
    selector: 'likert',
    template: `
        <button type="submit" class="button 1">1</button>
        <button type="submit" class="button 2">2</button>
        <button type="submit" class="button 3">3</button>
        <button type="submit" class="button 4">4</button>
        <button type="submit" class="button 5">5</button>
    `

})

export class LikertComponent{
  @Input() element: QuestionElement;
  constructor(){};
}

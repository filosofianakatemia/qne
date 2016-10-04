import { Component, Input } from '@angular/core';
import { QuestionGroup } from './group.model';

@Component({
  selector: 'group',
  template: `
    <h1>{{group.type}}</h1>
  `
})
export class GroupComponent {
  @Input() group: QuestionGroup;
}

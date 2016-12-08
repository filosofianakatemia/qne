import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Action } from './action.model';

@Component({
  selector: 'app-action',
  template: `
    <button class="button" (click)="navigate.emit(1)">{{action.title}}</button>
  `
})
export class ActionComponent {
    @Input() action: Action;
    @Output() navigate: EventEmitter<number> = new EventEmitter<number>();
}

import { Component, Input } from '@angular/core';
import { Option } from './instruction-option.model';

@Component({
  selector:'app-option',
  template: `
    <p *ngFor="let option of options">{{option.value }} {{option.title}}</p>
  `
})

export class InstructionOptionComponent{
  @Input() options: Option[];
}

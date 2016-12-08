import { Component, Input } from '@angular/core';
import { Instruction } from './instruction.model';

@Component({
  selector: 'instruction',
  template: `
      <button class="button" (click)="showHelp()">Instructions</button>
      <div [hidden]=hidden>
        <h3>{{instruction.title}}</h3>
        <p>{{instruction.description}}</p>
        <app-option [options]="instruction.options"></app-option>
      </div>
  `
})
export class InstructionComponent {
    @Input() public instruction: Instruction[];
    private hidden: boolean = true;
    private showHelp() {
      this.hidden =! this.hidden;
    };
}

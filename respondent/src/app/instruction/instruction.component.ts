import { Component, Input } from '@angular/core';
import { Instruction } from './instruction.model';

@Component({
  selector: 'instruction',
  template: `
    <div *ngFor="let instruction of instructions">
      <div *ngIf="(instruction.uuid) == instructionId">
        <button class="button" (click)="showHelp()">Instructions</button>
        <div [hidden]=hidden>
          <h3>{{instruction.title}}</h3>
          <p>{{instruction.description}}</p>
          <option [options]="instruction.options"></option>
        </div>
      </div>
    </div>
  `
})
export class InstructionComponent {
    @Input('instruction') public instructionId: String;
    @Input() public instructions: Instruction[];
    private hidden: boolean = true;
    private showHelp() {
      this.hidden =! this.hidden;
    };
}

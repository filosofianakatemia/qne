import { Pipe, PipeTransform } from '@angular/core';
import { QuestionGroup } from '../group/group.model';
import { QuestionElement } from '../element/element.model';
import { UIGroup } from '../action/ui-group.model';
import { Instruction } from '../instruction/instruction.model'
import { Action } from '../action/action.model'


/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

//Filter out groups that are not visible in UIState
@Pipe({name: 'groupFilter'})
export class GroupFilterPipe implements PipeTransform {
  transform(groups: QuestionGroup[], currentUIGroup: UIGroup){
    //Find group from QuestionGroup[] with the same uuid as in currentUIGroup
    const currentGroup: QuestionGroup = groups.filter(g => g.uuid === currentUIGroup.uuid)[0];

    //Filter out other elements if group.type is not "expanded"
    const filterElements: boolean = currentGroup.type !== "expanded";

    const filteredGroup: QuestionGroup[] = [{
      uuid: currentGroup.uuid,
      created: currentGroup.created,
      modified: currentGroup.modified,
      type: currentGroup.type,
      action: currentGroup.action,
      elements: filterElements ? //If true, get only one element, else all of them
        currentGroup.elements.filter(e => e.uuid === currentUIGroup.currentElement.uuid) :
        currentGroup.elements
    }]

    return filteredGroup;
  };
}

@Pipe({name: 'instructionFilter'})
export class InstructionFilterPipe implements PipeTransform {
  transform(instructions: Instruction[], instructionId: string){

     const filteredInstruction: Instruction[] = instructions.filter(i => i.uuid === instructionId);
     return filteredInstruction;
  };
}

@Pipe({name: 'actionFilter'})
export class ActionFilterPipe implements PipeTransform {
  transform(actions: Action[], actionId: string){

     const filteredAction: Action[] = actions.filter(a => a.uuid === actionId);
     return filteredAction[0];
  };
}

import { SharedAttributes } from '../shared/shared.model';
import { QuestionGroup } from '../group/group.model'
import { Action } from '../action/action.model'
import { Instruction } from '../instruction/instruction.model'

export class Questionnaire extends SharedAttributes{
  defaultLang: string;
  title: string;
  description: string;
  submit: string;

  constructor(public instructions: Array<Instruction>, public actions: Array<Action>, public groups: Array<QuestionGroup>){
    super();
    this.instructions = instructions;
    this.actions = actions;
    this.groups = groups;
  }
}

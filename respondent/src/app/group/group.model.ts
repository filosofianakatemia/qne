import { QuestionElement } from '../element/element.model'

export class QuestionGroup {
  uuid: string;
  type: string;
  action: string;

  constructor(public elements: Array<QuestionElement>){
    this.elements = elements;
  }
}

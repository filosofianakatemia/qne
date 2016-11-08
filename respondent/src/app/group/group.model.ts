import { QuestionElement } from '../element/element.model'

export class QuestionGroup {
  type: string;
  action: string;

  constructor(public elements: Array<QuestionElement>){
    this.elements = elements;
  }
}

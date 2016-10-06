import { QuestionElement } from '../element/element.model'

export class QuestionGroup {
  type: String;
  action: String;

  constructor(public elements: Array<QuestionElement>){
    this.elements = elements;
  }
}

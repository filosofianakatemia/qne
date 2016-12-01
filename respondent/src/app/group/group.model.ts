import { SharedAttributes } from '../shared/shared.model';
import { QuestionElement } from '../element/element.model'

export class QuestionGroup extends SharedAttributes{
  type: string;
  action: string;

  constructor(public elements: Array<QuestionElement>){
    super();
    this.elements = elements;
  }
}

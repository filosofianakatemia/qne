import { SharedAttributes } from '../shared/shared.model';
import { Option } from './instruction-option.model'

export class Instruction extends SharedAttributes{
  type: string;
  title: string;
  description: string;

  constructor(public options: Array<Option>){
    super();
    this.options = options;
  }
}


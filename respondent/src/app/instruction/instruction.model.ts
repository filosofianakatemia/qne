import { Option } from './instruction-option.model'

export class Instruction{
  uuid: string;
  type: string;
  title: string;
  description: string;

  constructor(public options: Array<Option>){
    this.options = options;
  }
}


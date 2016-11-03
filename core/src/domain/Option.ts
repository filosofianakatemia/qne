export default class Option {
  constructor(public uuid: string,
   public value: number,
   public title: string,
   public instruction_uuid: string,
   public created: number,
   public modified: number){}
}
export default class Instruction {
  constructor(public uuid: string, public type: string, public title: string, public description: string, public questionnaire_uuid: string, public created: number, public modified: number){}
}
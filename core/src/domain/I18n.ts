export default class Action {
   constructor(public uuid: string,
       public lang: string,
       public title: string,
       public description: string,
       public questionnaire_path: string,
       public action_uuid: string,
       public element_uuid:string,
       public option_uuid:string,
       public questionnaire_uuid: String,
       public created: number,
       public modified: number
       ) {}
}
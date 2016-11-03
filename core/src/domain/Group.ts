export default class Group {
    constructor(public uuid: string,
        public questionnaire_uuid: String,
        public action_uuid: String,
        public created: number,
        public modified: number) { }
}
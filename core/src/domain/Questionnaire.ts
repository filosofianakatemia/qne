export default class Questionnaire {
    constructor(public uuid: string,
        public title: string,
        public defaultLang: String,
        public description: String,
        public deployed: String,
        public closed: String,
        public questionnaire_path: string,
        public ogranization_uuid: string,
        public created: number,
        public modified: number) { }
}
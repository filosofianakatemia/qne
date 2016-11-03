import {Questionnaire} from "../domain/questionnaire";

function toQuestionnaire(dbQuestionnaire: any): Questionnaire{  
   return{
        uuid: dbQuestionnaire.questionnaire_uuid,
        title: dbQuestionnaire.title,
        defaultLang: dbQuestionnaire.defaultLang,
        description: dbQuestionnaire.description,
        deployed: dbQuestionnaire.deployed,
        closed: dbQuestionnaire.closed,
        questionnaire_path: dbQuestionnaire.questionnaire_path,
        organization_uuid: dbQuestionnaire.organization_uuid,
        created: dbQuestionnaire.created,
        modified: dbQuestionnaire.modified  
    }
}
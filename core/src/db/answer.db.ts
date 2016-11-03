import {Answer} from "../domain/Answer";

function toAnswer(dbAnswer: any): Answer{ 
   return{
        uuid: dbAnswer.answer_uuid,
        answer_time: dbAnswer.answer_time,
        questionnaire_uuid: dbAnswer.questionnaire_uuid,
        created: dbAnswer.created,
        modified: dbAnswer.modified
    }
}
import {Action} from "../domain/Action";

function toAction(dbAction: any): Action{    
   return{
        uuid: dbAction.action_uuid,
        action_type: dbAction.action_type,
        title: dbAction.title,
        questionnaire_uuid: dbAction.questionnaire_uuid,
        created: dbAction.created,
        modified: dbAction.modified
    }
}
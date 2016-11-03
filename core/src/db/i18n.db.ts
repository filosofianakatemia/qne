
import {I18n} from "../domain/I18n";

function toi18n(dbI18n: any): I18n{
    
   return{
        uuid: dbI18n.i18n_uuid,
        Lang: dbI18n.Lang,
        title: dbI18n.title,
        description: dbI18n.description,
        questionnaire_path:dbI18n.questionnaire_path,
        action_uuid: dbI18n.action_uuid,
        element_uuid: dbI18n.element_uuid,
        option_uuid: dbI18n.option_uuid,
        questionnaire_uuid: dbI18n.questionnaire_uuid,
        created: dbI18n.created,
        modified: dbI18n.modified
       
    }
  
}
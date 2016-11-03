import {Group} from "../domain/group";

function toGroup(dbGroup: any): Group{
     return {
        uuid: dbGroup.Group_uuid,
        questionnaire_uuid: dbGroup.questionnaire_uuid,
        action_uuid: dbGroup.action_uuid,
        group_type: dbGroup.group_type,
        created: dbGroup.created,
        modified: dbGroup.modified
       
    }
  
}
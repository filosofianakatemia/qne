import {Groups_Elements} from "../domain/groups_elements";

function toGroups_Elements(dbGroups_Elements: any): Groups_Elements{
     return {
        uuid: dbGroups_Elements.element_uuid,
        questionnaire_uuid: dbGroups_Elements.group_uuid,
        created: dbGroups_Elements.created,
        modified: dbGroups_Elements.modified   
    }
}
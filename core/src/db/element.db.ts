
import {Element} from "../domain/Element";

function toElement(dbElement: any): Element{   
   return{
        uuid: dbElement.element_uuid,
        element_type: dbElement.element_type,
        title: dbElement.title,
        description: dbElement.description,
        required: dbElement.required,
        instruction_uuid: dbElement.instruction_uuid,
        created: dbElement.created,
        modified: dbElement.modified  
    }
}
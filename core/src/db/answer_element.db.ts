import {Answer_element} from "../domain/Answer_element";

function toAnswer_element(dbAnswer_element: any): Answer_element{ 
   return{
        uuid: dbAnswer_element.answer_element_uuid,
        int_value: dbAnswer_element.int_value,
        string_value: dbAnswer_element.string_value,
        boolean_value: dbAnswer_element.Boolean_value,
        answer_uuid: dbAnswer_element.answer_uuid,
        created: dbAnswer_element.created,
        modified: dbAnswer_element.modified   
    }
}
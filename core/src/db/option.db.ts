import {Option} from "../domain/Option"

function toOption(dbOption: any): Option  {
    return {
    uuid: dbOption.option_uuid,
    value: dbOption.option_value,
    title: dbOption.user_title,
    instruction_uuid: dbOption.instruction_uuid,
    created: dbOption.created,
    modified: dbOption.modified
    }
}
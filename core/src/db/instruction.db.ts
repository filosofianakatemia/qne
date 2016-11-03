import {Instruction} from "../domain/Instruction"

function toInstruction(dbInstruction: any): Instruction  {
    return {
    uuid: dbInstruction.instruction_uuid,
    type: dbInstruction.instruction_type,
    title: dbInstruction.title,
    description: dbInstruction.description,
    questionnaire_uuid: dbInstruction.questionnaire_uuid,
    created: dbInstruction.created,
    modified: dbInstruction.modified
    }
}
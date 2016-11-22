import {Instruction} from "qne-api";
import {toNamedAPIType} from "./common.db";

export function toInstruction(dbInstruction: any): Instruction {

   // checking for the most common datarows

  let instruction: Instruction =
    toNamedAPIType(
      dbInstruction,
      dbInstruction.Instruction_uuid,
      dbInstruction.i18n);

   //Checking for any datarows specific to this model

  if (dbInstruction.instruction_type)
    instruction.type = dbInstruction.instruction_type;

  return instruction;
}

import {Instruction} from "qne-api";
import {toNamedAPIType} from "./common.db";
import {toOption} from "./option.db";

export function toInstruction(dbInstruction: any): Instruction {

   // checking for the most common datarows

  let instruction: Instruction =
    toNamedAPIType(
      dbInstruction,
      dbInstruction.instruction_uuid,
      dbInstruction.i18n);

   //Checking for any datarows specific to this model

  if (dbInstruction.instruction_type)
    instruction.type = dbInstruction.instruction_type;

  if (dbInstruction.options) {
    const options = dbInstruction.options.map(row => toOption(row));
    instruction.options = options;
  }

  return instruction;
}

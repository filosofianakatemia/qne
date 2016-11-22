import {Instruction} from "qne-api";
import {toNamedAPIType} from "./common.db";

export function toInstruction(dbInstruction: any): Instruction {

   // checking for the most common datarows

  let Instruction: Instruction =
    toNamedAPIType(
      dbInstruction,
      dbInstruction.Instruction_uuid,
      dbInstruction.i18n);

   //Checking for any datarows specific to this model

  if (dbInstruction.type)
    Instruction.type = dbInstruction.type;  

  return Instruction;
}
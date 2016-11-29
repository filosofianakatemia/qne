import {Questionnaire} from "qne-api";
import {toNamedAPIType, toI18n} from "./common.db";
import {toAction} from "./action.db";
import {toGroup} from "./group.db";
import {toInstruction} from "./instruction.db";

export function toQuestionnaire(dbQuestionnaire: any): Questionnaire {

   // checking for the most common datarows

  let questionnaire: Questionnaire =
    toNamedAPIType(
      dbQuestionnaire,
      dbQuestionnaire.questionnaire_uuid,
      dbQuestionnaire.i18n);

   //Checking for any datarows specific to this model

  if (dbQuestionnaire.defaultLang)
    questionnaire.defaultLang = dbQuestionnaire.defaultLang;

  if (dbQuestionnaire.submit_action_uuid)
    questionnaire.submit = dbQuestionnaire.submit_action_uuid;

  if (dbQuestionnaire.questionnaire_path)
    questionnaire.path = dbQuestionnaire.questionnaire_path;

  if (dbQuestionnaire.i18ns)
    questionnaire.i18n = dbQuestionnaire.i18ns.map(row => toI18n(row));

  if (dbQuestionnaire.instructions)
    questionnaire.instructions = dbQuestionnaire.instructions.map(row => toInstruction(row));

  if (dbQuestionnaire.actions)
    questionnaire.actions = dbQuestionnaire.actions.map(row => toAction(row));

  if (dbQuestionnaire.groups)
    questionnaire.groups = dbQuestionnaire.groups.map(row => toGroup(row));

  return questionnaire;
}

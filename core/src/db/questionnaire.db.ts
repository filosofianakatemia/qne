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

  if (dbQuestionnaire.submit)
    questionnaire.submit = dbQuestionnaire.submit_action_uuid;

  if (dbQuestionnaire.questionnaire_path)
    questionnaire.path = dbQuestionnaire.questionnaire_path;

  if (dbQuestionnaire.i18ns) {
    const i18n = dbQuestionnaire.i18ns.map(row => toAction(row));
    questionnaire.i18n = i18n;
  }

  if (dbQuestionnaire.instructions) {
    const instructions = dbQuestionnaire.instructions.map(row => toInstruction(row));
    questionnaire.instructions = instructions;
  }

  if (dbQuestionnaire.actions) {
    const actions = dbQuestionnaire.actions.map(row => toAction(row));
    questionnaire.actions = actions;
  }

  if (dbQuestionnaire.groups) {
    const groups = dbQuestionnaire.groups.map(row => toGroup(row));
    questionnaire.groups = groups;
  }

  return questionnaire;
}

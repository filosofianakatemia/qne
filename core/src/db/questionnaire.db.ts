import {Questionnaire} from "qne-api";
import {toNamedAPIType} from "./common.db";

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

  return questionnaire;
}

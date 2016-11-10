import {Questionnaire} from "qne-api";
import {toNamedAPIType} from "./common.db";

export function toQuestionnaire(dbQuestionnaire: any): Questionnaire {

  // TODO: i18n probably doesn't work like that in the Sequelize model

  let questionnaire: Questionnaire =
    toNamedAPIType(
      dbQuestionnaire,
      dbQuestionnaire.questionnaire_uuid,
      dbQuestionnaire.i18n);

  // TODO: Submit should be a UUID, probably doesn't work like that

  if (dbQuestionnaire.defaultLang)
    questionnaire.defaultLang = dbQuestionnaire.defaultLang;

  if (dbQuestionnaire.submit)
    questionnaire.submit = dbQuestionnaire.submit_action_uuid;

  if (dbQuestionnaire.questionnaire_path)
    questionnaire.path = dbQuestionnaire.questionnaire_path;

  return questionnaire;
}

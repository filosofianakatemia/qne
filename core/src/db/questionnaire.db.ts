import {Questionnaire} from 'qne-api';
import {toNamedAPIType, APIType} from './common.db';

export function toQuestionnaire(dbQuestionnaire: any): Questionnaire {

  // TODO: i18n probably doesn't work like that in the Sequelize model

  let questionnaire: Questionnaire =
    toNamedAPIType(
      dbQuestionnaire,
      dbQuestionnaire.questionnaire_uuid,
      dbQuestionnaire.i18n)

  // TODO: Submit should be a UUID, probably doesn't work like that

  if (dbQuestionnaire.submit)
    questionnaire.submit = dbQuestionnaire.submit.action_uuid;

  if (dbQuestionnaire.path)
    questionnaire.path = dbQuestionnaire.path;

  return questionnaire;
}

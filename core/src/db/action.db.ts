import {Action} from "qne-api";
import {toNamedAPIType, toI18n} from "./common.db";

export function toAction(dbAction: any): Action {

  // checking for the most common datarows

  let action: Action =
    toNamedAPIType(
      dbAction,
      dbAction.action_uuid,
      dbAction.i18n);

   //Checking for any datarows specific to this model

  if (dbAction.action_type)
    action.type = dbAction.action_type;

  if (dbAction.i18ns)
    action.i18n = dbAction.i18ns.map(row => toI18n(row));

  return action;
}

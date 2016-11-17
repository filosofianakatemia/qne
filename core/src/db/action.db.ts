import {Action} from "qne-api";
import {toNamedAPIType} from "./common.db";

export function toAction(dbAction: any): Action {

  // checking for the most common datarows

  let action: Action =
    toNamedAPIType(
      dbAction,
      dbAction.Action_uuid,
      dbAction.i18n);

   //Checking for any datarows specific to this model

  if (dbAction.type)
    action.actionType = dbAction.type;



  return action;
}

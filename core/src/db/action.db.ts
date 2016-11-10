import {Action} from "qne-api";
import {toNamedAPIType} from "./common.db";

export function toAction(dbAction: any): Action {

  // TODO: i18n probably doesn't work like that in the Sequelize model

  let action: Action =
    toNamedAPIType(
      dbAction,
      dbAction.Action_uuid,
      dbAction.i18n);

  // TODO: Submit should be a UUID, probably doesn't work like that


  if (dbAction.type)
    Action.actionType = dbAction.type;



  return action;
}
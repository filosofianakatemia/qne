import {Group} from "qne-api";
import {toElement} from "./element.db";
import {toNamedAPIType} from "./common.db";

export function toGroup(dbGroup: any): Group {

  
 // checking for the most common datarows
  let group: Group =
    toNamedAPIType(
      dbGroup,
      dbGroup.group_uuid,
      dbGroup.i18n);

 
 //Checking for any datarows specific to this model
  if (dbGroup.group_type)
    group.type = dbGroup.group_type;

  if (dbGroup.elements)
    group.elements = dbGroup.elements.map(row => toElement(row));

  if (dbGroup.action_uuid)
    group.action = dbGroup.action_uuid;

  return group;
};

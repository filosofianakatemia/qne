import {Group} from "qne-api";
import {toNamedAPIType} from "./common.db";

export function toGroup(dbGroup: any): Group {

  
 // checking for the most common datarows
  let group: Group =
    toNamedAPIType(
      dbGroup,
      dbGroup.Group_uuid,
      dbGroup.i18n);

 
 //Checking for any datarows specific to this model
  if (dbGroup.group_type)
    group.type = dbGroup.group_type;



  return group;
};

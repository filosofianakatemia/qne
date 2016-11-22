import {Option} from "qne-api";
import {toNamedAPIType} from "./common.db";

export function toOption(dbOption: any): Option {

   // checking for the most common datarows

  let Option: Option =
    toNamedAPIType(
      dbOption,
      dbOption.Option_uuid,
      dbOption.i18n);

   //Checking for any datarows specific to this model

  if (dbOption.option_value)
    Option.value = dbOption.option_value;

  return Option;
}
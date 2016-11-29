import {Option} from "qne-api";
import {toNamedAPIType, toI18n} from "./common.db";

export function toOption(dbOption: any): Option {

   // checking for the most common datarows

  let option: Option =
    toNamedAPIType(
      dbOption,
      dbOption.option_uuid,
      dbOption.i18n);

   //Checking for any datarows specific to this model

  if (dbOption.option_value)
    option.value = dbOption.option_value;

  if (dbOption.i18ns)
    option.i18n = dbOption.i18ns.map(row => toI18n(row));

  return option;
}

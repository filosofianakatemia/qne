import {Element} from "qne-api";
import {toNamedAPIType} from "./common.db";

export function toElement(dbElement: any): Element {

   // checking for the most common datarows

  let Element: Element =
    toNamedAPIType(
      dbElement,
      dbElement.Element_uuid,
      dbElement.i18n);

   //Checking for any datarows specific to this model

  if (dbElement.Element_type)
    Element.type = dbElement.Element_type;

  if (dbElement.required)
    Element.required = dbElement.required;

  return Element;
}

import {Element} from "qne-api";
import {toNamedAPIType} from "./common.db";

export function toElement(dbElement: any): Element {

   // checking for the most common datarows

  let element: Element =
    toNamedAPIType(
      dbElement,
      dbElement.Element_uuid,
      dbElement.i18n);

   //Checking for any datarows specific to this model

  if (dbElement.element_type)
    element.type = dbElement.element_type;

  if (dbElement.required)
    element.required = dbElement.required;

  return element;
}

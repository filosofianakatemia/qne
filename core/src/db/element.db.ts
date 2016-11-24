import {Element} from "qne-api";
import {toNamedAPIType, toI18n} from "./common.db";

export function toElement(dbElement: any): Element {

   // checking for the most common datarows

  let element: Element =
    toNamedAPIType(
      dbElement,
      dbElement.element_uuid,
      dbElement.i18n);

   //Checking for any datarows specific to this model

  if (dbElement.element_type)
    element.type = dbElement.element_type;

  if (dbElement.i18ns) {
    const i18n = dbElement.i18ns.map(row => toI18n(row));
    element.i18n = i18n;
  }

  if (dbElement.required)
    element.required = dbElement.required;

  if (dbElement.instruction_uuid)
    element.instruction = dbElement.instruction_uuid;

  /*console.info("<========================= ELEMENTTI ==========================>");
  console.info(element);*/
  return element;
}

import {I18n} from "qne-api";

export interface APIType {
  uuid: string;
  created: number;
  modified: number;
  title?: string;
  description?: string;
  i18n?: Array<I18n>;
  type?: string;
}
export function toAPIType(dbObject: any, dbObjectUuid: string): APIType {
  return {
    uuid: dbObjectUuid,
    created: dbObject.created,
    modified: dbObject.modified,
  };
}
export function toI18n(dbI18n: any): I18n {
  let i18n: I18n = {
    lang: dbI18n.lang,
  };
  if (dbI18n.title) i18n.title = dbI18n.title;
  return i18n;
}

export function toNamedAPIType(dbObject: any, dbObjectUuid: string,
                               dbI18nArray?: Array<any>): APIType {
  let apiType = toAPIType(dbObject, dbObjectUuid);
  if (dbObject.title) apiType.title = dbObject.title;
  if (dbObject.description) apiType.description = dbObject.description;

  if (dbI18nArray && dbI18nArray.length) {
    apiType.i18n = dbI18nArray.map(db18n => toI18n(db18n));
  }
  return apiType;
}

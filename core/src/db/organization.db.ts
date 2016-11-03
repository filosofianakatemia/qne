import {Organization} from "../domain/Organization"

function toOrganization(dbOrganization: any): Organization  {
    return {
    uuid: dbOrganization.organization_uuid,
    creator_user_uuid: dbOrganization.creator_user_uuid,
    created: dbOrganization.created,
    modified: dbOrganization.modified
    }
}
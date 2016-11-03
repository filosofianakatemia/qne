import {Role} from "../domain/role"

function toRole(dbRole: any): Role  {
    return {
    uuid: dbRole.role_uuid,
    type: dbRole.role_type,
    organization_uuid: dbRole.organization_uuid,
    user_uuid: dbRole.user_uuid,
    created: dbRole.created,
    modified: dbRole.modified
    }
}
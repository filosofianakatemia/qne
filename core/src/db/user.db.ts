import {User} from "../domain/user"

export function toUser(dbUser: any): User  {
    return {
    uuid: dbUser.user_uuid,
    email: dbUser.email,
    name: dbUser.user_name,
    created: dbUser.created,
    modified: dbUser.modified
    }
}
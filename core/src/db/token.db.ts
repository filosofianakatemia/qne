import {Token} from "../domain/token"

function toToken(dbToken: any): Token  {
    return {
    uuid: dbToken.token_uuid,
    expires: dbToken.expires,
    user_uuid: dbToken.user_uuid,
    created: dbToken.created,
    modified: dbToken.modified
    }
}
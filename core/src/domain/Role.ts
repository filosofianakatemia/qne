export default class Role {
  constructor(public uuid: string, public type: string, public organization_uuid: string, public user_uuid: string, public created: number, public modified: number){}
}
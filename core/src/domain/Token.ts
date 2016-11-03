export default class Token {
  constructor(public uuid: string, public expires: string, public user_name: string, public created: number, public modified: number){}
}
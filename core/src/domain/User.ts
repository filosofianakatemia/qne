export default class User {
  constructor(public uuid: string,
    public email: string,
    public name: string,
    public created: number,
    public modified: number) { }
}
import {DB} from "./db/db";
import {Questionnaire, Info, Action} from "qne-api";
import {Options as DatabaseOptions} from "sequelize";

// PUBLIC

export {Questionnaire, Action} from "qne-api";
export {Options as DatabaseOptions} from "sequelize";

export interface Options {
  dbName: string;
  dbUsername?: string;
  dbPassword?: string;
  dbOptions?: DatabaseOptions;
}

export class Core {
  private db: DB;

  constructor(debug: boolean, opts: Options) {
    this.db = new DB(debug, opts.dbName, opts.dbUsername, opts.dbPassword, opts.dbOptions);
  };

  // PUBLIC

  public async syncDatabase(force?: boolean, sequlizeFixturesPath?: string): Promise<any> {
    return await this.db.syncDatabase(force, sequlizeFixturesPath);
  };

  public async getRoot(): Promise<Info> {
    let info: Info = await this.db.getRoot();
    return info;
  }

  public async getQuestions(path: string): Promise<Questionnaire> {
    return await this.db.getQuestions(path);
  }
  public async getAction(title:string): Promise<Action> {
    return await this.db.getAction(title);
  }
}

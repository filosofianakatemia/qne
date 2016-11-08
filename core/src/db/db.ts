import {Questionnaire, Info} from "qne-api";
import * as Sequelize from "sequelize";
import {DBModels} from "./models";
import * as sequelizeFixtures from "sequelize-fixtures";

export class DB {

  private sequelize: Sequelize.Sequelize;
  private models: DBModels;
  private synced: boolean = false;

  constructor(private debug: boolean, dbName: string,
              dbUsername?: string, dbPassword?: string,
              dbOpts?: Sequelize.Options) {
    this.sequelize = new Sequelize(dbName, dbUsername, dbPassword, dbOpts);
    this.models = new DBModels(this.sequelize);
  }

  // PUBLIC

  public async syncDatabase(force?: boolean, sequelizeFixturesPath?: string): Promise<any> {
    const that = this;
    const forceCreation = force !== undefined ? force : false;
    return new Promise<any>(function(resolve, reject){
      that.sequelize.sync({force: forceCreation}).then(function() {
        console.info("Database synced");
        that.synced = true;
        if (sequelizeFixturesPath) {
          console.info("Loading fixtures from: ");
          sequelizeFixtures.loadFile(sequelizeFixturesPath, that.models).then(function(){
            console.info("...fixtures loaded");
            resolve();
          }, function(err){
            reject(err);
          });
        }else {
          resolve();
        }
      }, function(err){
        console.error(err);
        reject(err);
      });
    });
  }

  public async getRoot(): Promise<Info> {
    // TODO: Wait for database connection ready
    return new Promise<Info>((resolve, reject) => {
      const info: Info = {version: "SNAPSHOT"};
      resolve(info);
    });
  };

  public async getQuestions(path: string): Promise<Questionnaire> {
    return new Promise<Questionnaire>((resolve, reject) => {
      // TODO: Link this to questionnaire.db.ts getQuestions method
      const questionnaire: Questionnaire = {
        uuid: "12345-1231233121",
        title: "Test questionnaire",
        submit: "123214234",
        path: "test-questionnaire",
      };
      resolve(questionnaire);
    });
  }

}

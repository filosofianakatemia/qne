import {Questionnaire, Info, Action, Group} from "qne-api";
import * as Sequelize from "sequelize";
import {DBModels} from "./models";
import * as sequelizeFixtures from "sequelize-fixtures";
import {toQuestionnaire} from "./questionnaire.db";
import {toAction} from "./action.db";
import {toGroup} from "./group.db";

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
      // TODO: Link this to questionnaire.db.ts getQuestions method
      const result = await this.models.questionnaire.findAll({where: {questionnaire_path: path}});
      console.info(result[0].dataValues);
      console.info(toQuestionnaire(result[0].dataValues));
      result[0].dataValues.created = result[0].dataValues.created.getTime();
      result[0].dataValues.modified = result[0].dataValues.modified.getTime();
      return toQuestionnaire(result[0].dataValues);
  }

  public async getAction(title: string): Promise<Action> {
    const result = await this.models.action.findAll({where: {title: title}});
    console.info(result[0].dataValues);
    return toAction(result[0].dataValues);
  }
  public async getGroup(type:string): Promise<Group> {
    const result = await this.models.group.findAll({where: {type: type}});
    console.info(result[0].dataValues);
    return toGroup(result[0].dataValues);
  }
}

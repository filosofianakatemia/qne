import {Questionnaire, Info, Action, Group, Option, Instruction, Element} from "qne-api";
import * as Sequelize from "sequelize";
import {DBModels} from "./models";
import * as sequelizeFixtures from "sequelize-fixtures";
import {toQuestionnaire} from "./questionnaire.db";
import {toAction} from "./action.db";
import {toGroup} from "./group.db";
import {toOption} from "./option.db";
import {toInstruction} from "./instruction.db";
import {toElement} from "./element.db";

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
      const result = await this.models.questionnaire.findAll({
        include: [{
          model: this.models.action,
          where: {questionnaire_uuid: Sequelize.col("questionnaire.questionnaire_uuid")},
          required: false,
          include: {
            model: this.models.i18n,
            required: false,
          },
        }, {
          model: this.models.group,
          where: {questionnaire_uuid: Sequelize.col("questionnaire.questionnaire_uuid")},
          include: [{
            model: this.models.element,
            through: {
              attributes: ["element_uuid", "element_type", "title", "description", "required", "instruction_uuid"],
            },
            include: [{
              model: this.models.i18n,
              required: false,
            }],
            required: false,
          }],
          required: false,
        }, {
          model: this.models.instruction,
          where: {questionnaire_uuid: Sequelize.col("questionnaire.questionnaire_uuid")},
          required: false,
          include: [{
            model: this.models.option,
            required: false,
            include: {
              model: this.models.i18n,
              required: false,
            },
          }],
        }],
         where: {questionnaire_path: path}});
      console.info(result[0].dataValues);
      result[0].dataValues.created = result[0].dataValues.created.getTime();
      result[0].dataValues.modified = result[0].dataValues.modified.getTime();
      return toQuestionnaire(result[0].dataValues);
  }

  public async getAction(title: string): Promise<Action> {
    const result = await this.models.action.findAll({where: {title: title}});
    console.info(result[0].dataValues);
    return toAction(result[0].dataValues);
  }
  public async getGroup(type: string): Promise<Group> {
    const result = await this.models.group.findAll({where: {group_type: type}});
    console.info(result[0].dataValues);
    return toGroup(result[0].dataValues);
  }
  public async getOption(title:string): Promise<Option> {
    const result = await this.models.option.findAll({where: {title: title}});
    console.info(result[0].dataValues);
    return toOption(result[0].dataValues);
  }
  public async getInstruction(type:string): Promise<Instruction> {
    const result = await this.models.instruction.findAll({where: {instruction_type: type}});
    console.info(result[0].dataValues);
    return toInstruction(result[0].dataValues);
  }
  public async getElement(type:string): Promise<Element> {
    const result = await this.models.element.findAll({where: {element_type: type}});
    console.info(result[0].dataValues);
    return toElement(result[0].dataValues);
  }
}

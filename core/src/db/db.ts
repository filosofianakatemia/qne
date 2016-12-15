import {Questionnaire, Info} from "qne-api";
import * as Sequelize from "sequelize";
import {DBModels} from "./models";
import * as sequelizeFixtures from "sequelize-fixtures";
import {toQuestionnaire} from "./questionnaire.db";

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
          model: this.models.i18n,
          where: {questionnaire_uuid: Sequelize.col("questionnaire.questionnaire_uuid")},
          required: false,
        }, {
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
        order: [
          [this.models.group, "weight", "ASC"],
          [this.models.instruction, this.models.option, "weight", "ASC"],
          [this.models.group, this.models.element, this.models.groupElement, "weight", "ASC"],
        ],
        where: {questionnaire_path: path}});
      result[0].dataValues.created = result[0].dataValues.created.getTime();
      result[0].dataValues.modified = result[0].dataValues.modified.getTime();
      result[0].dataValues.actions.forEach(function(action){
        action.dataValues.created = action.dataValues.created.getTime();
        action.dataValues.modified = action.dataValues.modified.getTime();
      });
      result[0].dataValues.groups.forEach(function(group){
        group.dataValues.created = group.dataValues.created.getTime();
        group.dataValues.modified = group.dataValues.modified.getTime();
        group.dataValues.elements.forEach(function(element){
          element.dataValues.created = element.dataValues.created.getTime();
          element.dataValues.modified = element.dataValues.modified.getTime();
        });
      });
      result[0].dataValues.instructions.forEach(function(instruction){
        instruction.dataValues.created = instruction.dataValues.created.getTime();
        instruction.dataValues.modified = instruction.dataValues.modified.getTime();
        instruction.dataValues.options.forEach(function(option){
          option.dataValues.created = option.dataValues.created.getTime();
          option.dataValues.modified = option.dataValues.modified.getTime();
        });
      });
      return toQuestionnaire(result[0].dataValues);
  }
}

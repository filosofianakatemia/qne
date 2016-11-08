import {Sequelize, Options as DatabaseOptions, Model} from "sequelize";
import {action} from "./action";
import {answer} from "./answer";
import {answerElement} from "./answerElement";
import {element} from "./element";
import {group} from "./group";
import {groupsElements} from "./groupsElements";
import {i18n} from "./i18n";
import {instruction} from "./instruction";
import {option} from "./option";
import {organization} from "./organization";
import {questionnaire} from "./questionnaire";
import {role} from "./role";
import {token} from "./token";
import {user} from "./user";

export class DBModels{

  public user: any;
  public organization: any;
  public action: any;
  public answer: any;
  public answerElement: any;
  public element: any;
  public group: any;
  public groupsElements: any;
  public i18n: any;
  public instruction: any;
  public option: any;
  public questionnaire: any;
  public role: any;
  public token: any;

  constructor(private sequelize: Sequelize){
    this.user = user(this.sequelize);
    this.organization = organization(this.sequelize);
    this.action = action(this.sequelize);
    this.answer = answer(this.sequelize);
    this.answerElement = answerElement(this.sequelize);
    this.element = element(this.sequelize);
    this.group = group(this.sequelize);
    this.groupsElements = groupsElements(this.sequelize);
    this.i18n = i18n(this.sequelize);
    this.instruction = instruction(this.sequelize);
    this.option = option(this.sequelize);
    this.questionnaire = questionnaire(this.sequelize);
    this.role = role(this.sequelize);
    this.token = token(this.sequelize);

    // Relationships

    this.answerElement.belongsTo(this.answer, { foreignKey: "answer_uuid"});
    this.answer.hasMany(this.answerElement, { foreignKey: "answer_uuid"});
    this.answer.belongsTo(this.questionnaire, { foreignKey: "questionnaire_uuid"});
    this.user.hasMany(this.token, { foreignKey: "user_uuid"});
    this.user.hasMany(this.role, { foreignKey: "user_uuid"});
    this.token.belongsTo(this.user, { foreignKey: "user_uuid"});
    this.role.belongsTo(this.user, { foreignKey: "user_uuid"});
    this.organization.hasMany(this.role, { foreignKey: "organization_uuid"});
    this.organization.hasMany(this.questionnaire, { foreignKey: "organization_uuid"});
    this.role.belongsTo(this.organization, { foreignKey: "organization_uuid"});
    this.action.belongsTo(this.questionnaire, {foreignKey: "questionnaire_uuid"});
    this.action.hasMany(this.group, {foreignKey: "action_uuid"});
    this.action.hasMany(this.i18n, { foreignKey: "action_uuid"});
    this.option.belongsTo(this.instruction, { foreignKey: "instruction_uuid"});
    this.option.hasMany(this.i18n, { foreignKey: "option_uuid"});
    this.instruction.hasMany(this.option, { foreignKey: "instruction_uuid"});
    this.instruction.belongsTo(this.questionnaire, { foreignKey: "questionnaire_uuid"});
    this.element.hasMany(this.i18n, { foreignKey: "element_uuid"});
    this.i18n.belongsTo(this.option, { foreignKey: "option_uuid"});
    this.i18n.belongsTo(this.element, { foreignKey: "element_uuid"});
    this.i18n.belongsTo(this.action, { foreignKey: "action_uuid"});
    this.i18n.belongsTo(this.questionnaire, { foreignKey: "questionnaire_uuid"});
    this.element.belongsToMany(this.group, {through: this.groupsElements, foreignKey: "element_uuid"});
    this.group.belongsToMany(this.element, {through: this.groupsElements, foreignKey: "group_uuid"});
    this.group.belongsTo(this.action, {foreignKey: "action_uuid"});
    this.group.belongsTo(this.questionnaire, { foreignKey: "questionnaire_uuid"});
    this.questionnaire.hasMany(this.group, { foreignKey: "questionnaire_uuid"});
    this.questionnaire.hasMany(this.answer, { foreignKey: "questionnaire_uuid"});
    this.questionnaire.hasMany(this.i18n, { foreignKey: "questionnaire_uuid"});
    this.questionnaire.hasMany(this.action, { foreignKey: "questionnaire_uuid"});
    this.questionnaire.hasMany(this.instruction, { foreignKey: "questionnaire_uuid"});
    this.questionnaire.belongsTo(this.organization, { foreignKey: "organization_uuid"});
  }

  public getModels() {
    return {
      "user": this.user,
      "organization": this.organization,
      "action": this.action,
      "answer": this.answer,
      "answer_element": this.answerElement,
      "element": this.element,
      "group": this.group,
      "groups_elements": this.groupsElements,
      "i18n": this.i18n,
      "instruction": this.instruction,
      "option": this.option,
      "questionnaire": this.questionnaire,
      "role": this.role,
      "token": this.token
    };
  }
}

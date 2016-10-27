var Sequelize = require('sequelize');
var sequelize_fixtures = require("sequelize-fixtures")
 // , config    = require(__dirname + "/config/config");

var sequelize = new Sequelize('database_development', 'root', null, {
    dialect: 'sqlite',
    storage: './db.development.sqlite'
});

var Action   = sequelize.import(__dirname + "/build/src/db/models/action")
  , Answer     = sequelize.import(__dirname + "/build/src/db/models/answer")
  , Answer_Element   = sequelize.import(__dirname + "/build/src/db/models/answer_element")
  , Element     = sequelize.import(__dirname + "/build/src/db/models/element")
  , Group   = sequelize.import(__dirname + "/build/src/db/models/group")
  , Groups_Elements     = sequelize.import(__dirname + "/build/src/db/models/groups_elements")
  , I18n   = sequelize.import(__dirname + "/build/src/db/models/i18n")
  , Instruction     = sequelize.import(__dirname + "/build/src/db/models/instruction")
  , Option   = sequelize.import(__dirname + "/build/src/db/models/Option")
  , Organization     = sequelize.import(__dirname + "/build/src/db/models/organization")
  , Questionnaire     = sequelize.import(__dirname + "/build/src/db/models/questionnaire")
  , Role    = sequelize.import(__dirname + "/build/src/db/models/role")
  , Token     = sequelize.import(__dirname + "/build/src/db/models/token")
  , User     = sequelize.import(__dirname + "/build/src/db/models/user");

var models = {
  user: User,
  organization: Organization,
  action: Action,
  answer: Answer,
  answer_element: Answer_Element,
  element: Element,
  group: Group,
  groups_elements: Groups_Elements,
  i18n: I18n,
  instruction: Instruction,
  option: Option,
  organization: Organization,
  questionnaire: Questionnaire,
  role: Role,
  token: Token
};

Answer_Element.belongsTo(Answer, { foreignKey: 'answer_uuid'})
Answer.hasMany(Answer_Element, { foreignKey: 'answer_uuid'})
Answer.belongsTo(Questionnaire, { foreignKey: 'questionnaire_uuid'})
User.hasMany(Token, { foreignKey: 'user_uuid'})
User.hasMany(Role, { foreignKey: 'user_uuid'})
Token.belongsTo(User, { foreignKey: 'user_uuid'})
Role.belongsTo(User, { foreignKey: 'user_uuid'})
Organization.hasMany(Role, { foreignKey: 'organization_uuid'})
Organization.hasMany(Questionnaire, { foreignKey: 'organization_uuid'})
Role.belongsTo(Organization, { foreignKey: 'organization_uuid'})
Action.belongsTo(Questionnaire, {foreignKey: 'questionnaire_uuid'})
Action.hasMany(Group, {foreignKey: 'action_uuid'})
Action.hasMany(I18n, { foreignKey: 'action_uuid'})
Option.belongsTo(Instruction, { foreignKey: 'instruction_uuid'})
Option.hasMany(I18n, { foreignKey: 'option_uuid'})
Instruction.hasMany(Option, { foreignKey: 'instruction_uuid'})
Instruction.belongsTo(Questionnaire, { foreignKey: 'questionnaire_uuid'})
Element.hasMany(I18n, { foreignKey: 'element_uuid'})
I18n.belongsTo(Option, { foreignKey: 'option_uuid'})
I18n.belongsTo(Element, { foreignKey: 'element_uuid'})
I18n.belongsTo(Action, { foreignKey: 'action_uuid'})
I18n.belongsTo(Questionnaire, { foreignKey: 'questionnaire_uuid'})
Element.belongsToMany(Group, {through: 'groups_elements', foreignKey: 'element_uuid'})
Group.belongsToMany(Element, {through: 'groups_elements', foreignKey: 'group_uuid'})
Group.belongsTo(Action, {foreignKey: 'action_uuid'})
Group.belongsTo(Questionnaire, { foreignKey: 'questionnaire_uuid'})
Questionnaire.hasMany(Group, { foreignKey: 'questionnaire_uuid'})
Questionnaire.hasMany(Answer, { foreignKey: 'questionnaire_uuid'})
Questionnaire.hasMany(I18n, { foreignKey: 'questionnaire_uuid'})
Questionnaire.hasMany(Action, { foreignKey: 'questionnaire_uuid'})
Questionnaire.hasMany(Instruction, { foreignKey: 'questionnaire_uuid'})
Questionnaire.belongsTo(Organization, { foreignKey: 'organization_uuid'})

sequelize.sync({force: true}).then(function() {
  //console.log("Database created.").then(function () {
     sequelize_fixtures.loadFile("./test/testData.yaml", models);      
});
  //});

var Sequelize           = require('sequelize'),
    sequelize_fixtures  = require("sequelize-fixtures");
    userFunc            = require(__dirname + "/build/src/db/user.db")
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

/*sequelize.sync({force: true}).then(function() {
  //console.log("Database created.").then(function () {
     sequelize_fixtures.loadFile("./test/testData.yaml", models);      
});*/

/*Questionnaire.find({where:{questionnaire_uuid: "223e469e-1118-4155-bdc8-af43a505b167"}}).then(function(err, questionnaire){
  console.log(questionnaire);
}); */
/*Action.findAll().then(function(actions){
  console.log(actions);
});*/

User.findAll().then(function(result){
  //const user = result[0].dataValues.user_uuid;
  const user = userFunc.toUser(result[0].dataValues);
  console.log(user.uuid);
  /*result.forEach(function(item){
    console.log(item.dataValues.action_uuid);
  })*/
//  console.log(user);
});
  //});



// ES6-style imports
//import * as config from '../../../config/config.json';
import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';

// Import model specification from its own definition file.
// I'll explain how to define a model in Typescript in the next section.
import * as Action from './action';
import * as Organization from './organization';
import * as User from './user';
type Model = Sequelize.Model;
interface DbConnection {
  User: Model;
}
var db = {};

// I use the node-config package to manage the DB config you can choose
// to stick with the original version. And I removed environment variable
// support because I don't need it.

// FIXME: Typescript errors
/*var dbConfig = config.get('database');
var sequelize = new Sequelize(
    dbConfig['database'],
    dbConfig['username'],
    dbConfig['password'],
    dbConfig
); */
/*
var sequelize = new Sequelize('database_development', 'root', null, {
    dialect: 'sqlite',
    storage: './db.development.sqlite'
});
*/
var basename  = path.basename(module.filename);
fs
.readdirSync(__dirname)
.filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(function(file) {
    //var model = sequelize['import'](path.join(__dirname, file));
    // NOTE: you have to change from the original property notation to
    // index notation or tsc will complain about undefined property.

    // FIXME: Typescript errors
    //db[model['name']] = model;
});

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// FIXME: Typescript errors
//db['sequelize'] = sequelize;
db['Sequelize'] = Sequelize;

// FIXME: Typescript errors
//export default <DbConnection>db;


//var Sequelize = require(__dirname + "/models/index", 'sequelize')
var Sequelize = require('sequelize');
 // , config    = require(__dirname + "/config/config");
/*function Kanta(database, username, password, config) {
    this.database = config.database;
    this.username = config.username;
    this.password = config.password;
    this.config = config;
}; */

var sequelize = new Sequelize('database_development', 'root', null, {
    dialect: 'sqlite',
    storage: './db.development.sqlite'
});
var Action   = sequelize.import(__dirname + "/models/action")
  , Answer     = sequelize.import(__dirname + "/models/answer")
  , Answer_Element   = sequelize.import(__dirname + "/models/answer_element")
  , Element     = sequelize.import(__dirname + "/models/element")
  , Group   = sequelize.import(__dirname + "/models/group")
  //, Groups_Elements     = sequelize.import(__dirname + "/groups_elements")
  , I18n   = sequelize.import(__dirname + "/models/i18n")
  , Instruction     = sequelize.import(__dirname + "/models/instruction")
  , Option   = sequelize.import(__dirname + "/models/Option")
  , Organization     = sequelize.import(__dirname + "/models/organization")
  , Questionnaire     = sequelize.import(__dirname + "/models/questionnaire")
  , Role    = sequelize.import(__dirname + "/models/role")
  , Token     = sequelize.import(__dirname + "/models/token")
  , User     = sequelize.import(__dirname + "/models/user");

Answer_Element.belongsTo(Answer)
Answer.hasMany(Answer_Element)
User.hasMany(Token)
User.hasMany(Role)
Token.belongsTo(User)
Role.belongsTo(User)
Organization.hasMany(Role)
Organization.belongsTo(Organization)
Role.belongsTo(Organization)
Action.belongsTo(Questionnaire)
Action.hasMany(I18n)
Option.hasMany(Instruction)
Option.hasMany(I18n)
Instruction.belongsTo(I18n)
Instruction.belongsTo(Questionnaire)
Element.hasMany(I18n)
I18n.belongsTo(Option)
I18n.belongsTo(Element)
I18n.belongsTo(Action)
I18n.belongsTo(Questionnaire)
Element.belongsToMany(Group, {through: 'Groups_Elements'})
Group.belongsToMany(Element, {through: 'Groups_Elements'})
Group.belongsTo(Questionnaire)
Questionnaire.hasMany(Group)
Questionnaire.hasMany(Answer)
Questionnaire.hasMany(I18n)
Questionnaire.hasMany(Action)
Questionnaire.hasMany(Instruction)
Questionnaire.hasMany(Organization)

sequelize.sync({force: true});
 /* Project
    .create({ name: 'Sequelize', description: 'A nice MySQL ORM for NodeJS' })
    .on('success', function(project) {
      Task.create({ name: 'Choose a nice MySQL connector', deadline: new Date(), importance: 10 })
        .on('success', function(task1) {
          Task.create({ name: 'Build the rest', deadline: new Date(), importance: 90 })
            .on('success', function(task2) {
              project.setTasks([task1, task2]).on('success', function(tasks) {
                console.log(project)
                console.log(tasks)
              })
            })
        })
    }) */
//})
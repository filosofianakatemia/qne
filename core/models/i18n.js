var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return I18n = sequelize.define('i18n', {
  i18n_uuid: {type: DataTypes.UUID, primaryKey: true, allowNull: false},
  lang: DataTypes.STRING,
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  questionnaire_path: DataTypes.STRING,
  action_uuid: {type: DataTypes.UUID, foreignKey: true},
  element_uuid: {type: DataTypes.UUID, foreignKey: true},
  option_uuid: {type: DataTypes.UUID, foreignKey: true},
  questionnaire_uuid: {type: DataTypes.UUID, foreignKey: true}
}, {
    tableName: 'i18n',
    updatedAt: "modified",
    createdAt: "created"
});
};
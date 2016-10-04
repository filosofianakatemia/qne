var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return I18n = sequelize.define('i18n', {
  i18n_uuid: {type: DataTypes.UUID, primaryKey: true},
  lang: DataTypes.STRING,
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  questionnaire_path: DataTypes.STRING,
  element_uuid: DataTypes.UUID,
  option_uuid: DataTypes.UUID,
  action_uuid: DataTypes.UUID,
  questionnaire_uuid: DataTypes.UUID
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
};
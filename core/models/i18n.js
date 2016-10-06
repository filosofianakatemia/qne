var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return I18n = sequelize.define('i18n', {
  i18n_uuid: {type: DataTypes.UUID, primaryKey: true},
  lang: DataTypes.STRING,
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  questionnaire_path: DataTypes.STRING
}, {
    tableName: 'i18n',
    updatedAt: "modified",
    createdAt: "created"
});
};
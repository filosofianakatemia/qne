var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Group = sequelize.define('group', {
  group_uuid: {type: DataTypes.UUID, primaryKey: true},
  group_type: DataTypes.STRING,
  group_action: DataTypes.STRING,
  questionnaire_uuid: DataTypes.UUID,
  user_uuid: DataTypes.UUID
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
};
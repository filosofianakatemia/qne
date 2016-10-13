var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Group = sequelize.define('group', {
  group_uuid: {type: DataTypes.UUID, primaryKey: true, allowNull: false},
  group_type: DataTypes.STRING,
  action_uuid: {type: DataTypes.UUID,foreignKey: true},
  questionnaire_uuid: {type: DataTypes.UUID, foreignKey: true, allowNull: false}
}, {
    tableName: 'group',
    updatedAt: "modified",
    createdAt: "created"
});
};
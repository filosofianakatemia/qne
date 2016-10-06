var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Group = sequelize.define('group', {
  group_uuid: {type: DataTypes.UUID, primaryKey: true},
  group_type: DataTypes.STRING,
  group_action: DataTypes.STRING
}, {
    tableName: 'group',
    updatedAt: "modified",
    createdAt: "created"
});
};
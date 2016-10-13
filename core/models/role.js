var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Role = sequelize.define('role', {
  role_uuid: {type: DataTypes.UUID, primaryKey: true, allowNull: false},
  role_type: DataTypes.STRING,
  organization_uuid: {type: DataTypes.UUID, foreignKey: true, allowNull: false},
  user_uuid: {type: DataTypes.UUID, foreignKey: true, allowNull: false}
}, {
    tableName: 'role',
    updatedAt: "modified",
    createdAt: "created"
});
};
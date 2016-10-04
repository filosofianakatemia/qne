var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Role = sequelize.define('role', {
  role_uuid: {type: DataTypes.UUID, primaryKey: true},
  role_type: DataTypes.STRING,
  organization_uuid: DataTypes.UUID,
  user_uuid: DataTypes.UUID
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
}/*, {
    classMethods: {
      associate: function(models) {
        Role.belongsTo(models.User)
        Role.belongsTo()
      }
    }
  }*/);
};
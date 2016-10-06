var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Role = sequelize.define('role', {
  role_uuid: {type: DataTypes.UUID, primaryKey: true},
  role_type: DataTypes.STRING
}, {
    tableName: 'role',
    updatedAt: "modified",
    createdAt: "created"
});
};
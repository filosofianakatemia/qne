var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Token = sequelize.define('token', {
  token_uuid: {type: DataTypes.UUID, primaryKey: true, allowNull: false},
  expires: DataTypes.DATE,
  user_uuid: {type: DataTypes.UUID, foreignKey: true, allowNull: false}
}, {
    tableName: 'token',
    updatedAt: "modified",
    createdAt: "created"
});
};
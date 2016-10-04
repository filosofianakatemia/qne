var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Token = sequelize.define('token', {
  token_uuid: {type: DataTypes.UUID, primaryKey: true},
  expires: DataTypes.DATE,
  user_uuid: {type: DataTypes.UUID, foreignKey: true}
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
};
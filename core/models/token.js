var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Token = sequelize.define('token', {
  token_uuid: {type: DataTypes.UUID, primaryKey: true},
  expires: DataTypes.DATE
}, {
    tableName: 'token',
    updatedAt: "modified",
    createdAt: "created"
});
};
var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return User = sequelize.define('user', {
  user_uuid: {type: DataTypes.UUID, primaryKey: true, allowNull: false},
  email: DataTypes.STRING,
  user_name: DataTypes.STRING,
  user_password: DataTypes.STRING
}, {
    tableName: 'user',
    updatedAt: "modified",
    createdAt: "created"
});
};
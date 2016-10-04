var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Organization = sequelize.define('organization', {
  organization_uuid: {type: DataTypes.UUID, primaryKey: true},
  creator_user_uuid: DataTypes.UUID
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
};
var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Organization = sequelize.define('organization', {
  organization_uuid: {type: DataTypes.UUID, primaryKey: true, allowNull: false},
  creator_user_uuid: DataTypes.UUID
}, {
    tableName: 'organization',
    updatedAt: "modified",
    createdAt: "created"
});
};
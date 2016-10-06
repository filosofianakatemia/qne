var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return action = sequelize.define('action', {
    action_uuid: {type: DataTypes.UUID, primaryKey:true},
    action_type: DataTypes.STRING,
    title: DataTypes.STRING
}, {
    tableName: 'action',
    updatedAt: 'modified',
    createdAt: 'created'
});
};
var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return action = sequelize.define('action', {
    action_uuid: {type: DataTypes.UUID, primaryKey:true, allowNull: false},
    action_type: DataTypes.STRING,
    title: DataTypes.STRING,
    questionnaire_uuid: {type: DataTypes.UUID, foreignKey: true, allowNull: false}
}, {
    tableName: 'action',
    updatedAt: 'modified',
    createdAt: 'created'
});
};
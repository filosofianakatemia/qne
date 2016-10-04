var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return action = sequelize.define('action', {
    action_uuid: {type: DataTypes.UUID, primaryKey:true},
    action_type: DataTypes.STRING,
    title: DataTypes.STRING,
    questionnaire_uuid: {type: DataTypes.UUID, foreignKey:true}
    
}, {
    freezetableName: true,
    updatedAt: 'modified',
    createdAt: 'created'

});
};
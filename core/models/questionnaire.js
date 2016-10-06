var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return questionnaire = sequelize.define('questionnaire', {

    questionnaire_uuid: {type:DataTypes.UUID, primaryKey:true},
    defaultLang: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    submitted: DataTypes.UUID,
    questionnaire_path: DataTypes.STRING
}, {
    tableName: 'questionnaire',
    createdAt:'created',
    updatedAt:'modified'
});
};
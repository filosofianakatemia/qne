var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return questionnaire = sequelize.define('questionnaire', {

    questionnaire_uuid: {type:DataTypes.UUID, primaryKey:true},
    defaultLang: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    submitted: DataTypes.UUID,
    questionnaire_path: DataTypes.STRING,
    organization_uuid: {type: DataTypes.UUID, foreignKey:true}
}, {
    freezetableName: true,
    createdAt:'created',
    updatedAt:'modified'
});
};
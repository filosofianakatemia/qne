var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return questionnaire = sequelize.define('questionnaire', {
    questionnaire_uuid: {type:DataTypes.UUID, primaryKey:true, allowNull: false},
    defaultLang: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    deployed: DataTypes.DATE,
    closed: DataTypes.DATE,
    questionnaire_path: DataTypes.STRING,
    organization_uuid: {type: DataTypes.UUID, foreignKey: true}
}, {
    tableName: 'questionnaire',
    createdAt:'created',
    updatedAt:'modified'
});
};
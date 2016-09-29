var questionnaire = sequelize.define('questionnaire', {

    questionnaire_uuid: {type:sequelize.UUID, primaryKey:true},
    defaultLang: sequelize.String,
    title: sequelize.String,
    description: sequelize.String,
    submitted: sequelize.UUID,
    questionnaire_path: sequelize.STRING,
    organization_uuid: {type: sequelize.UUID, foreignKey:true}
}, {
    freezetableName: true,
    createdAt:'created',
    updatedAt:'modified'
});
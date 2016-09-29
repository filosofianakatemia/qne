var action = sequelize.define('action', {
    action_uuid: {type: sequelize.UUID, primaryKey:true},
    action_type: sequelize.STRING,
    title: sequelize.STRING,
    questionnaire_uuid: {type: sequelize.UUID, foreignKey:true}
    
}, {
    freezetableName: true,
    updatedAt: 'modified',
    createdAt: 'created'

});
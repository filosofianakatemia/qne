var element = sequelize.define('element', {
    element_uuid: {type: sequelize.UUID, primaryKey:true},
    element_type: sequelize.STRING,
    title: sequelize.STRING,
    description: sequelize.STRING,
    required: sequelize.BOOLEAN,
    instruction_uuid: {type: sequelize.UUID, foreignKey:true}


}, {
    tableName: option,
    updatedAt: 'modified',
    createdAt: 'created',

});
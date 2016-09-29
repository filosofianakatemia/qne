var groups_elements = sequelize.define('groups_elements', {
    group_uuid: {type: sequelize.UUID, primaryKey:true, foreignKey:true},
    element_uuid: {type: sequelize.UUID, primaryKey:true, foreignKey:true}

}, {
    freezetableName:true,
    updatedAt:'modified',
    createdAt:'created'
});
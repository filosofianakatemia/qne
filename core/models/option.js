var option = sequelize.define('option', {

    option_uuid: {type:Sequelize.UUID, PrimaryKey: true},
    option_value: Sequelize.STRING,
    title: Sequelize.STRING

}, {
    tableName: option,
    updatedAt: 'modified',
    createdAt: 'created'
});
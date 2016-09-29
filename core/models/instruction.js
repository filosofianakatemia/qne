var instruction = sequelize.define('instruction', {
    instruction_uuid: {type:sequelize.UUID, primaryKey:true},
    instruction_type: sequelize.STRING,
    title: sequelize.STRING,
    description: sequelize.STRING,
    questionnaire_uuid: {type:sequelize.UUID, foreignKey:true},
    option_uuid: {type:sequelize.UUID, foreignKey:true}
},

{
freezeTableName: true,
updatedAt:"modifed",
createdAt:"created"
});


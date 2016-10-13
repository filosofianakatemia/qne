var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return instruction = sequelize.define('instruction', {
    instruction_uuid: {type:DataTypes.UUID, primaryKey:true, allowNull: false},
    instruction_type: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    questionnaire_uuid: {type: DataTypes.UUID, foreignKey: true, allowNull: false}
},{
tableName: 'instruction',
updatedAt:"modifed",
createdAt:"created"
});
};


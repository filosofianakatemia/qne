var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return instruction = sequelize.define('instruction', {
    instruction_uuid: {type:DataTypes.UUID, primaryKey:true},
    instruction_type: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
},

{
tableName: 'instruction',
updatedAt:"modifed",
createdAt:"created"
});
};


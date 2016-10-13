var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return element = sequelize.define('element', {
    element_uuid: {type: DataTypes.UUID, primaryKey:true, allowNull: false},
    element_type: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    required: DataTypes.BOOLEAN,
    instruction_uuid: {type: DataTypes.UUID, foreignKey: true}
}, {
    tableName: 'element',
    updatedAt: 'modified',
    createdAt: 'created',

});
};
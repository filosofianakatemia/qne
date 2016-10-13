var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return option = sequelize.define('option', {
    option_uuid: {type:DataTypes.UUID, primaryKey: true, allowNull: false},
    option_value: DataTypes.INTEGER,
    title: DataTypes.STRING,
    instruction_uuid: { type:DataTypes.UUID, foreignKey: true, allowNull: false}
}, {
    tableName: 'option',
    updatedAt: 'modified',
    createdAt: 'created'
});
};
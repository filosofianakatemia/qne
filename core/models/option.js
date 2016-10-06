var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return option = sequelize.define('option', {
    option_uuid: {type:DataTypes.UUID, primaryKey: true},
    option_value: DataTypes.STRING,
    title: DataTypes.STRING
}, {
    tableName: 'option',
    updatedAt: 'modified',
    createdAt: 'created'
});
};
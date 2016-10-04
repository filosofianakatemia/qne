var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return option = sequelize.define('option', {
    option_uuid: {type:DataTypes.UUID, PrimaryKey: true},
    option_value: DataTypes.STRING,
    title: DataTypes.STRING
}, {
    freezeTableName: true,
    updatedAt: 'modified',
    createdAt: 'created'
});
};
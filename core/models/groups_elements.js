var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return groups_elements = sequelize.define('groups_elements', {
    group_uuid: {type: DataTypes.UUID, primaryKey:true},
    element_uuid: {type: DataTypes.UUID, primaryKey:true}
}, {
    freezetableName:true,
    updatedAt:'modified',
    createdAt:'created'
});
};
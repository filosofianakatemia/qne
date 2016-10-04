var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Answer_element = sequelize.define('answer_element', {
  element_uuid: {type: DataTypes.UUID, primaryKey: true},
  answer_uuid: {type: DataTypes.UUID, foreignKey: true},
  int_value: DataTypes.INTEGER,
  string_value: DataTypes.STRING,
  boolean_value: DataTypes.BOOLEAN
},{
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
};

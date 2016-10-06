var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Answer_element = sequelize.define('answer_element', {
  element_uuid: {type: DataTypes.UUID, primaryKey: true},
  int_value: DataTypes.INTEGER,
  string_value: DataTypes.STRING,
  boolean_value: DataTypes.BOOLEAN
},{
    tableName: 'answer_element',
    updatedAt: "modified",
    createdAt: "created"
});
};

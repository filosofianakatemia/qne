var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Answer_element = sequelize.define('answer_element', {
  answer_element_uuid: {type: DataTypes.UUID, primaryKey: true, allowNull: false},
  int_value: DataTypes.INTEGER,
  string_value: DataTypes.STRING,
  boolean_value: DataTypes.BOOLEAN,
  answer_uuid: {type: DataTypes.UUID, foreignKey: true, allowNull: false}
},{
    tableName: 'answer_element',
    updatedAt: "modified",
    createdAt: "created"
});
};

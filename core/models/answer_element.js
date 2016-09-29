var Answer_element = sequelize.define('answer_element', {
  element_uuid: {type: Sequelize.UUID, primaryKey: true},
  answer_uuid: {type: Sequelize.UUID, foreignKey: true},
  int_value: Sequelize.INTEGER,
  string_value: Sequelize.STRING,
  boolean_value: Sequelize.BOOLEAN
},{
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});

var User = sequelize.define('user', {
  user_uuid: {type: Sequelize.UUID, primaryKey: true},
  email: Sequelize.STRING,
  user_name: Sequelize.STRING,
  user_password: Sequelize.STRING
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
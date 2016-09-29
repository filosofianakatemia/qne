var Token = sequelize.define('token', {
  token_uuid: {type: Sequelize.UUID, primaryKey: true},
  expires: Sequelize.DATE,
  user_uuid: {type: Sequelize.UUID, foreignKey: true}
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
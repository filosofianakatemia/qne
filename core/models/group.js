var Group = sequelize.define('group', {
  group_uuid: {type: Sequelize.UUID, primaryKey: true},
  group_type: Sequelize.STRING,
  group_action: Sequelize.STRING,
  questionnaire_uuid: Sequelize.UUID,
  user_uuid: Sequelize.UUID
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
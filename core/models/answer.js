var Answer = sequelize.define('answer', {
  answer_uuid: {type: Sequelize.UUID, primaryKey: true},
  answer_time: Sequelize.DATE,
  questionnaire_uuid: Sequelize.UUID,
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
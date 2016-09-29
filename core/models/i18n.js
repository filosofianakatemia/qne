var I18n = sequelize.define('i18n', {
  i18n_uuid: {type: Sequelize.UUID, primaryKey: true},
  lang: Sequelize.STRING,
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  questionnaire_path: Sequelize.STRING,
  element_uuid: Sequelize.UUID,
  option_uuid: Sequelize.UUID,
  action_uuid: Sequelize.UUID,
  questionnaire_uuid: Sequelize.UUID
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
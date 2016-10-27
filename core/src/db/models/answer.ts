export default function(sequelize, DataTypes) {
  var Answer = sequelize.define('answer', {
        answer_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false},
        answer_time: DataTypes.DATE,
        questionnaire_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false}
  }, {
    freezeTableName: true,
    updatedAt: 'modified',
    createdAt: 'created'
  });
  return Answer;
}
export default function(sequelize, DataTypes) {
  var Action = sequelize.define('action', {
        action_uuid: {
            type: DataTypes.UUID,
            primaryKey:true,
            allowNull: false},
        action_type: DataTypes.STRING,
        title: DataTypes.STRING,
        questionnaire_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false}
  }, {
    freezeTableName: true,
    updateAt: 'modified',
    createdAt: 'created'
  });
  return Action;
}
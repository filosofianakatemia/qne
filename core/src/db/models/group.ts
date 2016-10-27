export default function(sequelize, DataTypes) {
  var Group = sequelize.define('group', {
        group_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false},
        group_type: DataTypes.STRING,
        action_uuid: {
            type: DataTypes.UUID,
            foreignKey: true},
        questionnaire_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false}
  }, {
    freezeTableName: true,
    updateAt: 'modified',
    createdAt: 'created'
  });
  return Group;
}
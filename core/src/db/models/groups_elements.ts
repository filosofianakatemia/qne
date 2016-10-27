export default function(sequelize, DataTypes) {
  var Groups_Elements = sequelize.define('groups_elements', {
        element_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            foreignKey: true,
            allowNull: false},
        group_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            foreignKey: true,
            allowNull: false},
  }, {
    freezeTableName: true,
    updatedAt: 'modified',
    createdAt: 'created'
  });
  return Groups_Elements;
}
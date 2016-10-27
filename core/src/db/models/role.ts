export default function(sequelize, DataTypes) {
  var Role = sequelize.define('role', {
    role_uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    role_type: DataTypes.STRING,
    organization_uuid: {
        type: DataTypes.UUID,
        foreignKey: true,
        allowNull: false
    },
    user_uuid: {
        type: DataTypes.UUID,
        foreignKey: true,
        allowNull: false}
  }, {
    freezeTableName: true,
    updatedAt: 'modified',
    createdAt: 'created'
  });
  return Role;
}
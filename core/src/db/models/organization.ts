export default function(sequelize, DataTypes) {
  var Organization = sequelize.define('organization', {
    organization_uuid: {
        type: DataTypes.UUID,
        primaryKey: true, 
        allowNull: false
    },
    creator_user_uuid: DataTypes.UUID
  }, {
    freezeTableName: true,
    updatedAt: 'modified',
    createdAt: 'created'
  });
  return Organization;
}

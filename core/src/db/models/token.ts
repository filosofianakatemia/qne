export default function(sequelize, DataTypes) {
  var Token = sequelize.define('token', {
    token_uuid: {
        type: DataTypes.UUID,
        primaryKey: true, 
        allowNull: false
    },
    expires: DataTypes.UUID,
    user_uuid: {
        type: DataTypes.UUID,
         foreignKey: true,
          allowNull: false
    }
  }, {
    freezeTableName: true,
    updateAt: 'modified',
    createdAt: 'created'
  });
  return Token;
}
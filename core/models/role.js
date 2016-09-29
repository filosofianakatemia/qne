var Role = sequelize.define('role', {
  role_uuid: {type: Sequelize.UUID, primaryKey: true},
  role_type: Sequelize.STRING,
  organization_uuid: Sequelize.UUID,
  user_uuid: Sequelize.UUID
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
}/*, {
    classMethods: {
      associate: function(models) {
        Role.belongsTo(models.User)
        Role.belongsTo()
      }
    }
  }*/);
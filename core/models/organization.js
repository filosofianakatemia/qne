var Organization = sequelize.define('organization', {
  organization_uuid: {type: Sequelize.UUID, primaryKey: true},
  creator_user_uuid: Sequelize.UUID
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
import { Sequelize, UUID } from "sequelize";

export function organization(sequelize: Sequelize): any {
  return sequelize.define("organization", {
    organization_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    creator_user_uuid: UUID,
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

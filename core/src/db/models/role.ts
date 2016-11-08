import { Sequelize, UUID, STRING } from "sequelize";

export function role(sequelize: Sequelize): any {
  return sequelize.define("role", {
    role_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    role_type: STRING,
    organization_uuid: {
      type: UUID,
      allowNull: false,
    },
    user_uuid: {
      type: UUID,
      allowNull: false,
    }
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

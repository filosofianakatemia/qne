import { Sequelize, UUID, DATE } from "sequelize";

export function token(sequelize: Sequelize): any {
  return sequelize.define("token", {
    token_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    expires: DATE,
    user_uuid: {
      type: UUID,
      allowNull: false,
    },
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

import { Sequelize, UUID, STRING } from "sequelize";

export function token(sequelize: Sequelize): any {
  return sequelize.define("token", {
    token_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    expires: STRING,
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

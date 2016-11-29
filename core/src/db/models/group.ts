import { Sequelize, UUID, STRING, INTEGER } from "sequelize";

export function group(sequelize: Sequelize): any {
  return sequelize.define("group", {
    group_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    group_type: STRING,
    weight: INTEGER,
    action_uuid: {
      type: UUID,
    },
    questionnaire_uuid: {
      type: UUID,
      allowNull: false,
    },
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

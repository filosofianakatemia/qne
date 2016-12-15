import { Sequelize, UUID, INTEGER, STRING } from "sequelize";

export function option(sequelize: Sequelize): any {
  return sequelize.define("option", {
    option_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    option_value: INTEGER,
    model_type: STRING,
    title: STRING,
    weight: INTEGER,
    instruction_uuid: {
      type: UUID,
      allowNull: false,
    },
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

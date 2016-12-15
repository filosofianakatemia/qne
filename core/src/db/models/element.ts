import { Sequelize, UUID, STRING, BOOLEAN } from "sequelize";

export function element(sequelize: Sequelize): any {
  return sequelize.define("element", {
    element_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    element_type: STRING,
    model_type: STRING,
    title: STRING,
    description: STRING,
    required: BOOLEAN,
    instruction_uuid: {
      type: UUID,
    },
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

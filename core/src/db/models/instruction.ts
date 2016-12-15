import { Sequelize, UUID, STRING } from "sequelize";

export function instruction(sequelize: Sequelize): any {
  return sequelize.define("instruction", {
    instruction_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    instruction_type: STRING,
    model_type: STRING,
    title: STRING,
    description: STRING,
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

import { Sequelize, UUID, DATE } from "sequelize";

export function answer(sequelize: Sequelize):any {
  return sequelize.define("answer", {
    answer_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    answer_time: DATE,
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

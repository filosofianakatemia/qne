import { Sequelize, UUID, INTEGER, STRING, BOOLEAN } from "sequelize";

export function answerElement(sequelize: Sequelize): any {
  return sequelize.define("answer_element", {
    answer_element_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    int_value: INTEGER,
    string_value: STRING,
    boolean_value: BOOLEAN,
    answer_uuid: {
      type: UUID,
      allowNull: false,
    },
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

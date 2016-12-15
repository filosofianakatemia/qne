import {UUID, STRING, Sequelize} from "sequelize";

export function action(sq: Sequelize): any {

  return sq.define("action", {
    action_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    action_type: STRING,
    model_type: STRING,
    title: STRING,
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

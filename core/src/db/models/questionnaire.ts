import { Sequelize, UUID, STRING, DATE } from "sequelize";

export function questionnaire(sequelize: Sequelize): any {
  return sequelize.define("questionnaire", {
    questionnaire_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    defaultLang: STRING,
    title: STRING,
    description: STRING,
    deployed: DATE,
    closed: DATE,
    questionnaire_path: STRING,
    organization_uuid: {
      type: UUID,
    },
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

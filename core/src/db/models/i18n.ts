import { Sequelize, UUID, STRING } from "sequelize";

export function i18n(sequelize: Sequelize): any {
  return sequelize.define("i18n", {
    i18n_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    lang: STRING,
    title: STRING,
    description: STRING,
    questionnaire_path: STRING,
    action_uuid: {
      type: UUID,
    },
    element_uuid: {
      type: UUID,
    },
    option_uuid: {
      type: UUID,
    },
    questionnaire_uuid: {
      type: UUID,
    },
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

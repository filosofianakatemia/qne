import { Sequelize, UUID, INTEGER } from "sequelize";

export function groupElement(sequelize: Sequelize): any {
  return sequelize.define("group_element", {
    element_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    group_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    weight: INTEGER,
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

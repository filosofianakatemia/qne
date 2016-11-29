import { Sequelize, UUID, INTEGER } from "sequelize";

export function groupsElements(sequelize: Sequelize): any {
  return sequelize.define("groups_elements", {
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

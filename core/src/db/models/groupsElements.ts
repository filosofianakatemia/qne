import { Sequelize, UUID } from "sequelize";

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
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
    });
}

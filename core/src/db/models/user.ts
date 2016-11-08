import * as bcrypt from "bcryptjs";
import { Sequelize, UUID, STRING } from "sequelize";

export function user(sequelize: Sequelize): any {
  return sequelize.define("user", {
    user_uuid: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: STRING,
      field: "email",
    },
    user_name: {
      type: STRING,
    },
    user_password: STRING,
  }, {
      freezeTableName: true,
      updatedAt: "modified",
      createdAt: "created",
      instanceMethods: {
        generateHash: function (password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
        },
        validPassword: function (password) {
          return bcrypt.compareSync(password, this.password);
        },
      },
    });
}

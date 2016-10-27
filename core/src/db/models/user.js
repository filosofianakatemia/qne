"use strict";
var bcrypt = require("bcryptjs");
function default_1(sequelize, DataTypes) {
    var User = sequelize.define('user', {
        user_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        user_name: {
            type: DataTypes.STRING
        },
        user_password: DataTypes.STRING
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created',
        instanceMethods: {
            generateHash: function (password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
            },
            validPassword: function (password) {
                return bcrypt.compareSync(password, this.password);
            }
        }
    });
    return User;
}
exports.__esModule = true;
exports["default"] = default_1;

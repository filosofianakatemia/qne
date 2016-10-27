"use strict";
function default_1(sequelize, DataTypes) {
    var Role = sequelize.define('role', {
        role_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        role_type: DataTypes.STRING,
        organization_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false
        },
        user_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false }
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created'
    });
    return Role;
}
exports.__esModule = true;
exports["default"] = default_1;

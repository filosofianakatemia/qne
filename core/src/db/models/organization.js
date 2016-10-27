"use strict";
function default_1(sequelize, DataTypes) {
    var Organization = sequelize.define('organization', {
        organization_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        creator_user_uuid: DataTypes.UUID
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created'
    });
    return Organization;
}
exports.__esModule = true;
exports["default"] = default_1;

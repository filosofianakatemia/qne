"use strict";
function default_1(sequelize, DataTypes) {
    var Group = sequelize.define('group', {
        group_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false },
        group_type: DataTypes.STRING,
        action_uuid: {
            type: DataTypes.UUID,
            foreignKey: true },
        questionnaire_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false }
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created'
    });
    return Group;
}
exports.__esModule = true;
exports["default"] = default_1;

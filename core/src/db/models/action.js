"use strict";
function default_1(sequelize, DataTypes) {
    var Action = sequelize.define('action', {
        action_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false },
        action_type: DataTypes.STRING,
        title: DataTypes.STRING,
        questionnaire_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false }
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created'
    });
    return Action;
}
exports.__esModule = true;
exports["default"] = default_1;

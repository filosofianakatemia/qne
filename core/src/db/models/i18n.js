"use strict";
function default_1(sequelize, DataTypes) {
    var I18n = sequelize.define('i18n', {
        i18n_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false },
        lang: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        questionnaire_path: DataTypes.STRING,
        action_uuid: {
            type: DataTypes.UUID,
            foreignKey: true },
        element_uuid: {
            type: DataTypes.UUID,
            foreignKey: true },
        option_uuid: {
            type: DataTypes.UUID,
            foreignKey: true },
        questionnaire_uuid: {
            type: DataTypes.UUID,
            foreignKey: true }
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created'
    });
    return I18n;
}
exports.__esModule = true;
exports["default"] = default_1;

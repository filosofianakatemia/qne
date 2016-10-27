"use strict";
function default_1(sequelize, DataTypes) {
    var Instruction = sequelize.define('instruction', {
        instruction_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false },
        instruction_type: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        questionnaire_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false }
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created'
    });
    return Instruction;
}
exports.__esModule = true;
exports["default"] = default_1;

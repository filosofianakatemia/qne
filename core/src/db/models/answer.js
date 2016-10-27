"use strict";
function default_1(sequelize, DataTypes) {
    var Answer = sequelize.define('answer', {
        answer_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false },
        answer_time: DataTypes.DATE,
        questionnaire_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false }
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created'
    });
    return Answer;
}
exports.__esModule = true;
exports["default"] = default_1;

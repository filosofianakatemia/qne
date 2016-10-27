"use strict";
function default_1(sequelize, DataTypes) {
    var Answer_element = sequelize.define('answer_element', {
        answer_element_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false },
        int_value: DataTypes.INTEGER,
        string_value: DataTypes.STRING,
        boolean_value: DataTypes.BOOLEAN,
        answer_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false }
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created'
    });
    return Answer_element;
}
exports.__esModule = true;
exports["default"] = default_1;

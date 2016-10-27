"use strict";
function default_1(sequelize, DataTypes) {
    var Option = sequelize.define('option', {
        option_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false },
        option_value: DataTypes.INTEGER,
        title: DataTypes.STRING,
        instruction_uuid: {
            type: DataTypes.UUID,
            foreignKey: true,
            allowNull: false }
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created'
    });
    return Option;
}
exports.__esModule = true;
exports["default"] = default_1;

"use strict";
function default_1(sequelize, DataTypes) {
    var Element = sequelize.define('element', {
        element_uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false },
        element_type: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        required: DataTypes.BOOLEAN,
        instruction_uuid: {
            type: DataTypes.UUID,
            foreignKey: true }
    }, {
        freezeTableName: true,
        updateAt: 'modified',
        createdAt: 'created'
    });
    return Element;
}
exports.__esModule = true;
exports["default"] = default_1;

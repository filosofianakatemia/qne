var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Answer = sequelize.define('answer', {
  answer_uuid: {type: DataTypes.UUID, primaryKey: true, allowNull: false},
  answer_time: DataTypes.DATE,
  questionnaire_uuid: {type: DataTypes.UUID, foreignKey: true, allowNull: false}
}, {
    tableName: 'answer',
    updatedAt: "modified",
    createdAt: "created"
});
};
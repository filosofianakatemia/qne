var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Answer = sequelize.define('answer', {
  answer_uuid: {type: DataTypes.UUID, primaryKey: true},
  answer_time: DataTypes.DATE,
  questionnaire_uuid: DataTypes.UUID,
}, {
    freezeTableName: true,
    updatedAt: "modified",
    createdAt: "created"
});
};
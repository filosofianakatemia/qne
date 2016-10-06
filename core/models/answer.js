var sequelize = require('sequelize');

module.exports=function(sequelize, DataTypes) {
return Answer = sequelize.define('answer', {
  answer_uuid: {type: DataTypes.UUID, primaryKey: true},
  answer_time: DataTypes.DATE
}, {
    tableName: 'answer',
    updatedAt: "modified",
    createdAt: "created"
});
};
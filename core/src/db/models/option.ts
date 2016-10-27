export default function(sequelize, DataTypes) {
  var Option = sequelize.define('option', {
    option_uuid: {
        type:DataTypes.UUID,
        primaryKey: true,
        allowNull: false},
    option_value: DataTypes.INTEGER,
    title: DataTypes.STRING,
    instruction_uuid: {
        type:DataTypes.UUID,
        foreignKey: true,
        allowNull: false}
  }, {
    freezeTableName: true,
    updatedAt: 'modified',
    createdAt: 'created'
  });
  return Option;
}
export default function(sequelize, DataTypes) {
  var Element = sequelize.define('element', {
        element_uuid: {
            type: DataTypes.UUID,
            primaryKey:true,
            allowNull: false},
        element_type: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        required: DataTypes.BOOLEAN,
        instruction_uuid: {
            type: DataTypes.UUID,
            foreignKey: true}
  }, {
    freezeTableName: true,
    updatedAt: 'modified',
    createdAt: 'created'
  });
  return Element;
}
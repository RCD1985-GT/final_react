'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guardado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Receta, {
        foreignKey: 'recetaId'
      });
      this.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId'
      });
    }
  }
  Guardado.init({
    recetaId: DataTypes.STRING,
    usuarioId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Guardado',
  });
  return Guardado;
};
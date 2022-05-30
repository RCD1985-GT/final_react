'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Guardado, {
        foreignKey: 'recetaId'
      });
     }
  }
  Receta.init({
    usuarioId: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    poster: DataTypes.STRING,
    ingredientes: DataTypes.STRING,
    preparacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Receta',
    tableName: 'receta'
  });
  return Receta;
};
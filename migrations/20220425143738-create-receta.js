'use strict';

module.exports = {
  async up(queryInterface, Sequelize) { // VERIFICAR ESTA LINEA
    await queryInterface.createTable('Recetas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      ingredientes: {
        type: Sequelize.STRING
      },
      preparacion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recetas');
  }
};
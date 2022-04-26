'use strict';
module.exports = {
  async up(queryInterface, Sequelize) { // VERIFICAR ESTA LINEA
    await queryInterface.createTable('Guardados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recetaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'Recetas',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'Usuarios',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Guardados');
  }
};
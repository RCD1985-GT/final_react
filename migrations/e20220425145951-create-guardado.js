'use strict';
module.exports = {
  async up(queryInterface, Sequelize) { // VERIFICAR ESTA LINEA
    await queryInterface.createTable('Guardado', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuario',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      recetaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Receta',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Guardado');
  }
};
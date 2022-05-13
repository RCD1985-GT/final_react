'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('guardado', [ // QUITO BCRYPT PARA COMPROBAR QUE FUNCIONA "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds))
    {
      "id": 1,
      "recetaId": 1,
      "usuarioId": 1,
      "titulo": "Small Soldiers",
      "tipo": "Ensalada",
      "poster": "https://psu.edu/ut/massa/quis/augue/luctus/tincidunt.json?est=nisl&congue=venenatis&elementum=lacinia&in=aenean&hac=sit",
       "ingredientes": "ingradientes",
      "preparacion": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "createdAt": "2021/10/14",
      "updatedAt": "2022/02/21"
    }, {
      "id": 2,
      "recetaId": 2,
      "usuarioId": 2,
      "titulo": "As Far As My Feet Will Carry Me (So weit die Füße tragen)",
      "tipo": "Asado",
      "poster": "https://naver.com/sollicitudin/mi/sit/amet.json?condimentum=bibendum&id=imperdiet&luctus=nullam&nec=orci&molestie=pede&sed=venenatis&justo=non&pellentesque=sodales",
      "ingredientes": "ingredientes",
      "preparacion": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "createdAt": "2022/03/21",
      "updatedAt": "2022/02/14"
    }, {
      "id": 3,
      "recetaId": 3,
      "usuarioId": 3,
      "titulo": "Salsa",
      "tipo": "Comedy|Horror",
      "poster": "https://psu.edu/ut/massa/quis/augue/luctus/tincidunt.json?est=nisl&congue=venenatis&elementum=lacinia&in=aenean&hac=sit",
      "ingredientes": "ingradientes",
      "preparacion": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "createdAt": "2021/07/26",
      "updatedAt": "2022/02/16"
    }, {
      "id": 4,
      "recetaId": 4,
      "usuarioId": 4,
      "titulo": "Very Potter Musical, A",
      "tipo": "Crujiente",
      "poster": "https://psu.edu/ut/massa/quis/augue/luctus/tincidunt.json?est=nisl&congue=venenatis&elementum=lacinia&in=aenean&hac=sit",
      
      "ingredientes": "ingradientes",
      "preparacion": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "createdAt": "2022/04/03",
      "updatedAt": "2021/09/18"
    }, {
      "id": 5,
      "recetaId": 5,
      "usuarioId": 5,
      "titulo": "I Will Follow You Into the Dark",
      "tipo": "Crudo",
      "poster": "https://psu.edu/ut/massa/quis/augue/luctus/tincidunt.json?est=nisl&congue=venenatis&elementum=lacinia&in=aenean&hac=sit",
      
      "ingredientes": "ingradientes.",
      "preparacion": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "createdAt": "2021/10/13",
      "updatedAt": "2021/08/23"
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recetas', [ // QUITO BCRYPT PARA COMPROBAR QUE FUNCIONA "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds))
    {
      "id": 1,
      "titulo": "Small Soldiers",
      "tipo": "Animation|Children|Fantasy|War",
      "poster": "https://psu.edu/ut/massa/quis/augue/luctus/tincidunt.json?est=nisl&congue=venenatis&elementum=lacinia&in=aenean&hac=sit",
      "tiempo": "00:00:00",
      "ingredientes": "ingradientes",
      "preparacion": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "createdAt": "2021/09/14",
      "updatedAt": "2021/10/29"
    }, {
      "id": 2,
      "titulo": "As Far As My Feet Will Carry Me (So weit die Füße tragen)",
      "tipo": "Drama|War",
      "poster": "https://naver.com/sollicitudin/mi/sit/amet.json?condimentum=bibendum&id=imperdiet&luctus=nullam&nec=orci&molestie=pede&sed=venenatis&justo=non&pellentesque=sodales",
      "tiempo": "00:00:00",
      "ingredientes": "ingredientes",
      "preparacion": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "createdAt": "2021/09/29",
      "updatedAt": "2022/03/03"
    }, {
      "id": 3,
      "titulo": "Careful",
      "tipo": "Comedy|Horror",
      "poster": "https://psu.edu/ut/massa/quis/augue/luctus/tincidunt.json?est=nisl&congue=venenatis&elementum=lacinia&in=aenean&hac=sit",
      "tiempo": "00:00:00",
      "ingredientes": "ingradientes",
      "preparacion": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "createdAt": "2021/09/29",
      "updatedAt": "2021/12/20"
    }, {
      "id": 4,
      "titulo": "Very Potter Musical, A",
      "tipo": "Comedy|Musical",
      "poster": "https://psu.edu/ut/massa/quis/augue/luctus/tincidunt.json?est=nisl&congue=venenatis&elementum=lacinia&in=aenean&hac=sit",
      "tiempo": "00:00:00",
      "ingredientes": "ingradientes",
      "preparacion": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "createdAt": "2022/03/28",
      "updatedAt": "2022/01/31"
    }, {
      "id": 5,
      "titulo": "I Will Follow You Into the Dark",
      "tipo": "Drama|Horror|Romance",
      "poster": "https://psu.edu/ut/massa/quis/augue/luctus/tincidunt.json?est=nisl&congue=venenatis&elementum=lacinia&in=aenean&hac=sit",
      "tiempo": "00:00:00",
      "ingredientes": "ingradientes.",
      "preparacion": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      "createdAt": "2022/03/29",
      "updatedAt": "2021/05/28"
    }
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

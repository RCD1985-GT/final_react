'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth'); 


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [ // QUITO BCRYPT PARA COMPROBAR QUE FUNCIONA "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds))
    {
      "id": 1,
      "nombre": "Rodrigo",
      "apellido": "Campos",
      "email": "rodrigo@gmail.com",
      "password": "1234",
      "rol": "1",
      "createdAt": "2021/08/30",
      "updatedAt": "2021/11/12"
    }, {
      "id": 2,
      "nombre": "Ryan",
      "apellido": "Tallquist",
      "email": "rtallquist1@sun.com",
      "password": "BEfBG2tuU4DR",
      "rol": "0",
      "createdAt": "2022/02/14",
      "updatedAt": "2021/07/05"
    }, {
      "id": 3,
      "nombre": "Ham",
      "apellido": "Mynett",
      "email": "hmynett2@devhub.com",
      "password": "W2Tkcs",
      "rol": "0",
      "createdAt": "2022/04/12",
      "updatedAt": "2021/05/07"
    }, {
      "id": 4,
      "nombre": "Ludwig",
      "apellido": "Dingate",
      "email": "ldingate3@addtoany.com",
      "password": "73Mt3Cy",
      "rol": "0",
      "createdAt": "2021/12/06",
      "updatedAt": "2021/06/28"
    }, {
      "id": 5,
      "nombre": "Nikolas",
      "apellido": "MacGeaney",
      "email": "nmacgeaney4@fema.gov",
      "password": "jitufGzCke9",
      "rol": "0",
      "createdAt": "2021/11/19",
      "updatedAt": "2021/05/22"
    }, {
      "id": 6,
      "nombre": "Fransisco",
      "apellido": "Ker",
      "email": "fker5@cbslocal.com",
      "password": "CCnaCZfiu",
      "rol": "0",
      "createdAt": "2021/09/22",
      "updatedAt": "2021/08/24"
    }, {
      "id": 7,
      "nombre": "Marni",
      "apellido": "Gavriel",
      "email": "mgavriel6@apple.com",
      "password": "oCtwAjrbnC",
      "rol": "0",
      "createdAt": "2021/11/15",
      "updatedAt": "2021/05/31"
    }, {
      "id": 8,
      "nombre": "Darda",
      "apellido": "Cestard",
      "email": "dcestard7@nyu.edu",
      "password": "hEcU3wZaD",
      "rol": "0",
      "createdAt": "2021/07/07",
      "updatedAt": "2021/10/04"
    }, {
      "id": 9,
      "nombre": "Penny",
      "apellido": "Howgate",
      "email": "phowgate8@flickr.com",
      "password": "2ujyXSYZ4US",
      "rol": "0",
      "createdAt": "2021/05/14",
      "updatedAt": "2021/10/17"
    }, {
      "id": 10,
      "nombre": "Edward",
      "apellido": "Goldthorp",
      "email": "egoldthorp9@cocolog-nifty.com",
      "password": "BIJ6ydmeCouw",
      "rol": "0",
      "createdAt": "2021/10/31",
      "updatedAt": "2022/01/03"
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

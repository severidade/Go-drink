'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id:1,
        email: 'adm@deliveryapp.com',
        name: 'Delivery App Admin',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        role: 'administrator',
        // senha: md5('--adm2@21!!--')
      },
      {
        id:2,
        email: 'fulana@deliveryapp.com',
        name: 'Fulana Pereira',
        password: '3c28d2b0881bf46457a853e0b07531c6',
        role: 'seller',
        // senha: md5('fulana@123')
      },
      {
        id:3,
        email: 'zebirita@email.com',
        name: 'Cliente Zé Birita',
        password: '1c37466c159755ce1fa181bd247cb925',
        role: 'customer',
        // senha: md5('$#zebirita#$')
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

//   (2, 'Fulana Pereira', 'fulana@deliveryapp.com', '3c28d2b0881bf46457a853e0b07531c6', 'seller'), -- senha: md5('fulana@123')
//   (3, 'Cliente Zé Birita', 'zebirita@email.com', '1c37466c159755ce1fa181bd247cb925', 'customer'); -- 
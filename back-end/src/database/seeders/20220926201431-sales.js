'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        id:1,
        userId: 1,
        sellerId: 3,
        totalPrice: 7777,
        deliveryAddress: 'Rua secreta',
        deliveryNumber: 777,
        status: 'Em andamento',
        createdAt: new Date(),
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};

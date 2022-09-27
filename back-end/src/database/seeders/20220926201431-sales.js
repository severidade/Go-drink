'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        id:1,
        user_id: 1,
        seller_id: 3,
        total_price: 7777,
        delivery_address: 'Rua secreta',
        delivery_Number: 777,
        status: 'Em andamento',
        sale_date: new Date(),
      },
      {
        id:2,
        user_id: 3,
        seller_id: 7,
        total_price: 888,
        delivery_address: 'Rua misteriosa',
        delivery_Number: 88,
        status: 'Finalizado',
        sale_date: new Date(),
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};

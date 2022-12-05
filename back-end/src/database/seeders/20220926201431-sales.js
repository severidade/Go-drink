'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        id:1,
        user_id: 3,
        seller_id: 2,
        total_price: 44.97,
        delivery_address: 'Rua secreta',
        delivery_Number: 777,
        status: 'Pendente',
        sale_date: new Date(),
      },
      {
        id:2,
        user_id: 3,
        seller_id: 2,
        total_price: 431.9,
        delivery_address: 'Rua misteriosa',
        delivery_Number: 88,
        status: 'Preparando',
        sale_date: new Date(),
      },
      {
        id:3,
        user_id: 3,
        seller_id: 2,
        total_price: 50.37,
        delivery_address: 'Rua secreta',
        delivery_Number: 777,
        status: 'Em Trânsito',
        sale_date: new Date(),
      },
      {
        id:4,
        user_id: 3,
        seller_id: 2,
        total_price: 4.98,
        delivery_address: 'Rua misteriosa',
        delivery_Number: 88,
        status: 'Entregue',
        sale_date: new Date(),
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};

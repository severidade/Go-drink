'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: 1,
        product_id: 3,
        quantity: 3,
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 5,
      },
      {
        sale_id: 2,
        product_id: 1,
        quantity: 77,
      },
      {
        sale_id: 2,
        product_id: 4,
        quantity: 35,
      },
      {
        sale_id: 3,
        product_id: 5,
        quantity: 23,
      },
      {
        sale_id: 4,
        product_id: 3,
        quantity: 2,
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {});
  }
};

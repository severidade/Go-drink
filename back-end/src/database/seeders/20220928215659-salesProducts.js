'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('salesProducts', [
      {
        id:1,
        sale_id: 1,
        product_id: 3,
        quantity: 3,
      },
      {
        id:2,
        sale_id: 1,
        product_id: 2,
        quantity: 5,
      },
      {
        id:3,
        sale_id: 2,
        product_id: 1,
        quantity: 77,
      },
      {
        id:4,
        sale_id: 2,
        product_id: 4,
        quantity: 555,
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('salesProducts', null, {});
  }
};

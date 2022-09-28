'use strict';
module.exports = {
    /**
   * @param {import('sequelize').queryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sale_id: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER 
      },
      quantity: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};
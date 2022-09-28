'use strict';
module.exports = {
  /**
   * 
   * @param {import('sequelize').queryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id'
      },
      sellerId: {
        type: Sequelize.INTEGER,
        field: 'seller_id'
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2),
        field: 'total_price'
      },
      deliveryAddress: {
        type: Sequelize.STRING(100),
        field: 'delivery_address'
      },
      deliveryNumber: {
        type: Sequelize.STRING(50),
        field: 'delivery_number'
      },
      status: {
        type: Sequelize.STRING(50),
        defaultValue: 'Pendente'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date'
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
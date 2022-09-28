'use strict';
module.exports = {
    /**
   * @param {import('sequelize').queryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      role: {
        type: Sequelize.STRING(255),
        defaultValue: 'customer',
        allowNull: false
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};
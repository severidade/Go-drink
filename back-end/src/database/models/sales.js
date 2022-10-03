'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.sales.belongsTo(models.users, {
        foreignKey: 'userId',
        as: 'User',
      }),
      models.sales.belongsTo(models.users, {
        foreignKey: 'sellerId',
        as: 'Seller',
      })
    }

  }
  Sale.init({
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sales',
    updatedAt: false,
    createdAt: 'saleDate',
    underscored:true,
  });
  return Sale;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class salesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.sales.belongsToMany(models.products, {
        as: 'Products',
        through: salesProducts,
        foreignKey: 'saleId',
        otherKey: "productId",
      });

      models.products.belongsToMany(models.sales, {
        as: 'Sales',
        through: salesProducts,
        foreignKey: 'productId',
        otherKey: 'saleId',
      });
    }
  }
  salesProducts.init(
    {
      saleId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      productId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: 'sales_products',
      underscored: true,
      timestamps: false,
    }
  );
  return salesProducts;
};

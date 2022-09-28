'use strict';
const {
  Model
} = require('sequelize');
    /**
   * @param {import('sequelize').queryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
    timestamps: false,
    underscored: true
  });
  return products;
};
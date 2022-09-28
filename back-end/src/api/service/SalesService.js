const Joi = require('joi');
const { sales } = require('../../database/models');
const isUndefined = require('../utils/isUndefined');

const salesService = {
  bodyValidation: (data) => {
    const schema = Joi.object({
      userId: Joi.number().required(),
      sellerId: Joi.number().required(),
      totalPrice: Joi.number().required(),
      deliveryAddress: Joi.string().required(),
      deliveryNumber: Joi.string().required(),
      saleDate: Joi.date().required(),
      status: Joi.string().required(),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      error.status = 400;
      throw error;
    }
    return value;
  },

  patchValidation: (data) => {
    const schema = Joi.object({
      status: Joi.string().required(),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      error.status = 400;
      throw error;
    }
    return value;
  },

  create: async (data) => sales.create(data),

  list: async () => sales.findAll({}),

  findById: async (id) => {
    const item = await sales.findByPk(id);

    isUndefined(item);

    return item;
  },

  delete: async (id) => {
    const item = await sales.destroy({ where: { id } });

    isUndefined(item);

    return item;
  },

  update: async (id, data) => {
    const result = await sales.update(data, { where: { id } });
    
    isUndefined(item);

    if (result[0] === 1) return sales.findByPk(id);

    return { message: 'Sem alterações' };
  },

  patch: async (id, status) => {
    const result = await sales.update(status, { where: { id } });

    if (result[0] === 1) return sales.findByPk(id);

    return sale;
  },

};

module.exports = salesService;

// onst modelsToInclude = [
//   {
//     model: User,
//     as: 'user',
//     attributes: { exclude: ['password'] },
//   },
//   {
//     model: Category,
//     as: 'categories',
//   },
// ];
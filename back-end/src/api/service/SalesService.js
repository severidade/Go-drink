const Joi = require('joi');
const { sales } = require('../../database/models');
const isUndefined = require('../utils/isUndefined');

const salesService = {
  createBodyValidation: (data) => {
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

  updateBodyValidation: (data) => {
    const schema = Joi.object({
      userId: Joi.number(),
      sellerId: Joi.number(),
      totalPrice: Joi.number(),
      deliveryAddress: Joi.string(),
      deliveryNumber: Joi.string(),
      saleDate: Joi.date(),
      status: Joi.string(),
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
    const item = await sales.update(data, { where: { id } });
    
    isUndefined(item);

    if (item[0] === 1) return sales.findByPk(id);

    return { message: 'Sem alterações' };
  },

};

module.exports = salesService;
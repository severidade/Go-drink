const Joi = require('joi');
const { sales } = require('../../database/models');

const salesService = {
  validateBody: (data) => {
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

  create: async (data) => sales.create(data),

  list: async () => sales.findAll({}),

};

module.exports = salesService;
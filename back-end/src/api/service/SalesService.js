const Joi = require('joi');
const { sales, users, products, salesProducts } = require('../../database/models');
const isUndefined = require('../utils/isUndefined');

const modelsToInclude = [
  {
    model: users,
    as: 'User',
    attributes: { exclude: ['password'] },
  },
  {
    model: products,
    as: 'Products',
    through: { 
      attributes: [],
    },
  },
];

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
      products: Joi.array().required(),
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

  create: async (data) => {
    await Promise.all(data.products.map(async (p) => {
      const product = await products.findByPk(p.id);
      isUndefined(product);
    }));

    const { id: saleId } = await sales.create(data);

    await Promise.all(data.products.map(async ({ id, quantity }) => {
      await salesProducts.create({ id, saleId, quantity });
    }));

    return sales.findByPk(saleId, { include: modelsToInclude });
  },

  list: async () => sales.findAll({ include: modelsToInclude }),

  findById: async (id) => {
    const item = await sales.findByPk(id, { include: modelsToInclude });

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
    
    isUndefined(result);

    if (result[0] === 1) return sales.findByPk(id);

    return { message: 'Sem alterações' };
  },

  patch: async (id, status) => {
    const result = await sales.update(status, { where: { id } });

    if (result[0] === 1) return sales.findByPk(id);

    return result;
  },

};

module.exports = salesService;

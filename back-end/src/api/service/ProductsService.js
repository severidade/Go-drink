const Joi = require('joi');
const { products } = require('../../database/models');

const isUndefined = (data, msg) => {
  if (!data) {
    const e = new Error(msg || 'Produto não existe ou Id Invalido');
    e.status = 404;
    throw e;
  }
};

const productsService = {
  updateBodyValidation: (data) => {
    const schema = Joi.object({
      name: Joi.string(),
      price: Joi.number().positive(),
      urlImage: Joi.string(),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      error.status = 400;
      throw error;
    }
    return value;
  },

  createBodyValidation: (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().positive().required(),
      urlImage: Joi.string().required(),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      error.status = 400;
      throw error;
    }
    return value;
  },

  create: async ({ name, price, urlImage }) => {
    const productExists = await products.findOne({ where: { name } });
    isUndefined(!productExists, 'Este produto já existe');

    return products.create({ name, price, urlImage });
  },

  list: async () => {
    const items = await products.findAll({});

    return items;
  },

  findById: async (id) => {
    const item = await products.findByPk(id);
    isUndefined(item);

    return item;
  },

  delete: async (id) => {
    const item = await products.destroy({ where: { id } });
    isUndefined(item);

    return item;
  },

  update: async (id, data) => {
    const item = await products.update(data, { where: { id } });
    
    isUndefined(item);

    return item;
  },
};

module.exports = productsService;
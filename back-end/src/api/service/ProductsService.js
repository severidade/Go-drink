const Joi = require('joi');
const { products } = require('../../database/models');

const productsService = {
  updateBodyValidation: (data) => {
    const schema =  Joi.object({
      name: Joi.string(),
      price: Joi.number().positive(),
      urlImage: Joi.string(),
    })

    const { error, value } = schema.validate(data);
    if (error) {
      error.status = 400;
      throw error;
    }
    return value;
  },

  list: async () => {
    const items = await products.findAll({});

    return items;
  },

  findById: async (id) => {
    const item = await products.findByPk(id)

    if (!item) {
      const e = new Error('Produto não existe ou Id Invalido')
      e.status = 404
      throw e
    }

    return item
  },

  delete: async (id) => {
    const item = await products.destroy({ where: { id }})

    if (!item) {
      const e = new Error('Produto não existe ou Id Invalido')
      e.status = 404
      throw e
    }

    return item
  },

  update: async (id, data) => {
    const item = await products.update(data, { where: { id }})
    console.log(item);
    
    if (!item) {
      const e = new Error('Produto não existe ou Id Invalido')
      e.status = 404
      throw e
    }

    return item;
  }
}

module.exports = productsService
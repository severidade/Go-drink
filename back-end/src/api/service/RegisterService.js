const Joi = require('joi');
const md5 = require('md5');
const { Op } = require('sequelize');
const { users } = require('../../database/models');

const registerService = {
  validateBody: (data) => {
    const schema = Joi.object({
      name: Joi.string().required().messages({
        'string.empty': 'Field name is required',
      }),
      email: Joi.string().email().required().messages({
        'string.empty': 'Field email is required',
      }),
      password: Joi.string().required().min(6).messages({
        'string.empty': 'Field password is required',
      }),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      error.status = 400;
      throw error;
    }
    return value;
  },

  create: async ({ name, email, password }) => {
    const userExists = await users.findOne({
        where: {
          [Op.or]: [{ name }, { email }],
        },
    });

    if (userExists) {
      const e = new Error('Invalid Register');
      e.name = 'Validation Error';
      e.status = 400;
      throw e;
    }
    return users.create({ name, email, password: md5(password), role: 'customer' });
  },
};

module.exports = registerService;
const Joi = require('joi');
const { sales } = require('../../database/models');

const salesService = {
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
      const e = new Error('Isales');
      e.name = 'Validation Error';
      e.status = 409;
      throw e;
    }

  },
};

module.exports = registerService;
const Joi = require('joi');
const { users } = require('../../database/models');
const jwtService = require('./JwtService');

const loginService = {
  validateBody: (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required().messages({
        'string.empty': 'Some required fields are missing',
      }),
      password: Joi.string().required().min(6).messages({
        'string.empty': 'Some required fields are missing',
      }),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      error.status = 400;
      throw error;
    }
    return value;
  },

  login: async ({ email, password }) => {
    const user = await users.findOne({
      where: { email, password }, 
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      const e = new Error('Invalid fields');
      e.name = 'ValidationError';
      e.status = 400;
      throw e;
    }

    return jwtService.createToken(user);
  },
};

module.exports = loginService;
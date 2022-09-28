const Joi = require('joi');
const md5 = require('md5');
const { users } = require('../../database/models');
const jwtService = require('./JwtService');

const loginService = {
  validateBody: (data) => {
    const schema = Joi.object({
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

  login: async ({ email, password }) => {
    const user = await users.findOne({
      where: { email, password: md5(password) },
      attributes: { exclude: ['password'] },
    });

    console.log(user);

    if (!user) {
      const e = new Error('Not found');
      e.name = 'Not found';
      e.status = 404;
      throw e;
    }

    return jwtService.createToken(user);
  },
};

module.exports = loginService;
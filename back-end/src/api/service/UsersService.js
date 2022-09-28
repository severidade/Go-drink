const Joi = require('joi');
const md5 = require('md5');
const { Op } = require('sequelize');
const { users } = require('../../database/models');
const jwtService = require('./JwtService');
const isUndefined = require('../utils/isUndefined');

const usersService = {
  validateBody: (data) => {
    const schema = Joi.object({
      name: Joi.string().min(12).required().messages({
        'string.empty': 'Field name is required',
        'sting.length': 'Field name must be at least 12 characters long',
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

  validateBodyAdm: (data) => {
    const schema = Joi.object({
      name: Joi.string().min(12).required().messages({
        'string.empty': 'Field name is required',
        'sting.length': 'Field name must be at least 12 characters long',
      }),
      email: Joi.string().email().required().messages({
        'string.empty': 'Field email is required',
      }),
      password: Joi.string().required().min(6).messages({
        'string.empty': 'Field password is required',
      }),
      role: Joi.string().required().messages({
        'string.empty': 'Field role is required',
      }),
    });

    const { error, value } = schema.validate(data);
    if (error) {
      error.status = 400;
      throw error;
    }
    return value;
  },

  create: async (data) => {
    const { name, email, password } = data;

    const userExists = await users.findOne({
        where: {
          [Op.or]: [{ name }, { email }],
        },
    });

    if (userExists) {
      const e = new Error('Invalid Register');
      e.name = 'Validation Error';
      e.status = 409;
      throw e;
    }

    // const band-aid = data.role ? { name, email, password: md5(password), role: data.role } : { name, email, password: md5(password) }

    const user = await users.create(
      { name, email, password: md5(password), role: data.role },
      { attributes: { excludes: ['password'] } },
    );

    return jwtService.createToken(user);
  },

  // createAdm: async ({ name, email, password, role }) => {
  //   const userExists = await users.findOne({
  //       where: {
  //         [Op.or]: [{ name }, { email }],
  //       },
  //   });

  //   if (userExists) {
  //     const e = new Error('Invalid Register');
  //     e.name = 'Validation Error';
  //     e.status = 409;
  //     throw e;
  //   }

  //   const user = await users.create(
  //     { name, email, password: md5(password) },
  //     { attributes: { excludes: ['password'] } },
  //   );

  //   return jwtService.createToken(user);
  // },

  list: async () => {
    const usersList = await users.findAll({});

    return usersList;
  },

  findById: async (id) => {
    const user = await users.findByPk(id);

    isUndefined(user);

    return user;
  },

  delete: async (id) => {
    console.log('oi to no service');
    const user = await users.destroy({ where: { id } });

    isUndefined(user);

    return user;
  },

  update: async (id, data) => {
    const result = await users.update(data, { where: { id } });
    
    isUndefined(result);

    if (result[0] === 1) return users.findByPk(id);

    return { message: 'Sem alterações' };
  },
};

module.exports = usersService;
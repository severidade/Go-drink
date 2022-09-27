const registerRouter = require('express').Router();
const registerController = require('../controller/RegisterController');

registerRouter.post('/', registerController.create);

module.exports = registerRouter;

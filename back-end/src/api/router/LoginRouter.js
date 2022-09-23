const { Router } = require('express');
const loginController = require('../controller/LoginController');

const loginRouter = Router();

loginRouter.post('/', loginController.login);

module.exports = loginRouter;

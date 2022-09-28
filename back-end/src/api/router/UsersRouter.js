const usersRouter = require('express').Router();
const usersController = require('../controller/UsersController');
const validateAuth = require('../middlewares/validateAuth');

usersRouter.get('/:id', usersController.findById);
usersRouter.put('/:id', usersController.update);
usersRouter.delete('/:id', usersController.delete);
usersRouter.post('/admin', usersController.createAdm);
usersRouter.post('/', usersController.create);
usersRouter.get('/', usersController.list);

module.exports = usersRouter;

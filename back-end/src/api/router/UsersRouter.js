const usersRouter = require('express').Router();
const usersController = require('../controller/UsersController');
const validateAuth = require('../middlewares/validateAuth');

usersRouter.get('/sellers', validateAuth, usersController.listSellers);
usersRouter.get('/:id', validateAuth, usersController.findById);
usersRouter.put('/:id', validateAuth, usersController.update);
usersRouter.delete('/:id', validateAuth, usersController.delete);
usersRouter.post('/admin', validateAuth, usersController.createAdm);
usersRouter.post('/', usersController.create);
usersRouter.get('/', validateAuth, usersController.list);

module.exports = usersRouter;

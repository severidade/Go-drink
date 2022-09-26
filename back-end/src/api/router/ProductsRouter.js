const { Router } = require('express');
const productsController = require('../controller/ProductsController');
// const validateAuth = require('../middlewares/validateAuth') ;

const productsRouter = Router();

productsRouter.get('/:id', productsController.findById);
productsRouter.delete('/:id', productsController.delete);
productsRouter.put('/:id', productsController.update);
productsRouter.get('/', productsController.list);
productsRouter.post('/', productsController.create);

module.exports = productsRouter;
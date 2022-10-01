const salesRouter = require('express').Router();
const salesController = require('../controller/SalesController');

salesRouter.get('/:id', salesController.findById);
salesRouter.get('/user/:id', salesController.findUserSales);
salesRouter.get('/seller/:id', salesController.findSellerSales);
salesRouter.put('/:id', salesController.update);
salesRouter.delete('/:id', salesController.delete);
salesRouter.post('/', salesController.create);
salesRouter.get('/', salesController.list);
salesRouter.patch('/:id', salesController.patch);

module.exports = salesRouter;

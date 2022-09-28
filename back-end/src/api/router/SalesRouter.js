const salesRouter = require('express').Router();
const salesController = require('../controller/SalesController');

salesRouter.get('/:id', salesController.findById);
salesRouter.put('/:id', salesController.update);
salesRouter.delete('/:id', salesController.delete);
salesRouter.post('/', salesController.create);
salesRouter.get('/', salesController.list);
salesRouter.patch('/', salesRouter.patch);

module.exports = salesRouter;

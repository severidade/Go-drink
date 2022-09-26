const salesRouter = require('express').Router();
const salesController = require('../controller/SalesController');

salesRouter.post('/', salesController.create);
salesRouter.get('/', salesController.list);

module.exports = salesRouter;

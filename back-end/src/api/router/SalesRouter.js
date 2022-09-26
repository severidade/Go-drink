const router = require('express').Router();
const salesController = require('../controller/SalesController');

router.post('/', salesController.create);

module.exports = router;

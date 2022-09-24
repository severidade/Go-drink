const router = require('express').Router();
const registerController = require('../controller/RegisterController');

router.post('/', registerController.create);

module.exports = router;

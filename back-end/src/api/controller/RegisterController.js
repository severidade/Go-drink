const registerService = require('../service/RegisterService');

const registerController = {
  create: async (req, res) => {
    registerService.validateBody(req.body);
    const token = await registerService.create(req.body);

    res.status(201).json({ token });
  },
};

module.exports = registerController;
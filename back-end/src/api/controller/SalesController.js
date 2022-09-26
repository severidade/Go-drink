const salesService = require('../service/SalesService');

const salesController = {
  create: async (req, res) => {
    salesService.validateBody(req.body);
    const saleCreated = await salesService.create(req.body);

    res.status(201).json(saleCreated);
  },
};

module.exports = salesController;
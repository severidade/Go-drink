const salesService = require('../service/SalesService');

const salesController = {
  create: async (req, res) => {
    salesService.validateBody(req.body);
    const saleCreated = await salesService.create(req.body);

    res.status(201).json(saleCreated);
  },

  list: async (_req, res) => {
    const sales = await salesService.list();

    res.status(200).json(sales);
  },
};

module.exports = salesController;
const salesService = require('../service/SalesService');

const salesController = {
  create: async (req, res) => {
    salesService.createBodyValidation(req.body);

    const saleCreated = await salesService.create(req.body);

    res.status(201).json(saleCreated);
  },

  list: async (_req, res) => {
    const sales = await salesService.list();

    res.status(200).json(sales);
  },

  findById: async (req, res) => {
    const { id } = req.params;

    const sale = await salesService.findById(id);

    res.status(200).json(sale);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    
    await salesService.delete(id);
    
    res.status(204);
  },

  update: async (req, res) => {
    const { id } = req.params;

    const items = salesService.updateBodyValidation(req.body);
    
    const updatedSale = await salesService.update(id, items);

    res.status(200).json(updatedSale);
  },
};

module.exports = salesController;
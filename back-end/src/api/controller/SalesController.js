const salesService = require('../service/SalesService');

const salesController = {
  create: async (req, res) => {
    salesService.bodyValidation(req.body);

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

  findUserSales: async (req, res) => {
    const { id } = req.params;

    const sale = await salesService.findUserSales(id);

    res.status(200).json(sale);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    
    await salesService.delete(id);
    
    res.status(204).send();
  },

  update: async (req, res) => {
    const { id } = req.params;

    const item = salesService.updateBodyValidation(req.body);
    
    const updatedSale = await salesService.update(id, item);

    res.status(200).json(updatedSale);
  },

  patch: async (req, res) => {
    const { id } = req.params;

    const status = salesService.patchValidation(req.body);

    const editedSale = await salesService.patch(id, status);

    res.status(200).json(editedSale);
  },
};

module.exports = salesController;
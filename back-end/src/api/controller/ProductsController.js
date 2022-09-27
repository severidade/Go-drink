const jwtService = require('../service/JwtService');
const productsService = require('../service/ProductsService');

const productsController = {
  create: async (req, res) => {
    const product = productsService.createBodyValidation(req.body);

    const createdProduct = await productsService.create(product);

    res.status(201).json(createdProduct);
  },

  list: async (req, res) => {
    const items = await productsService.list();

    res.status(200).json(items);
  },

  findById: async (req, res) => {
    const { id } = req.params;

    const items = await productsService.findById(id);

    res.status(200).json(items);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    
    await productsService.delete(id);

    res.status(204);
  },

  update: async (req, res) => {
    const { id } = req.params;

    const items = productsService.updateBodyValidation(req.body);
    
    const updatedItem = await productsService.update(id, items);

    res.status(200).json(updatedItem);
  },
};

module.exports = productsController;
const express = require('express');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  obtainProductSchema,
} = require('../schemas/product.schema');
const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (_, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

router.get(
  '/:id',
  validatorHandler(obtainProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    let body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({
      message: 'created',
      data: newProduct,
    });
  }
);

router.patch(
  '/:id',
  validatorHandler(obtainProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
    let { id } = req.params;
    let body = req.body;
    const product = await service.updateByPatch(id, body);
    res.json({
      message: 'updated',
      id: product,
    });
  }
);

router.put(
  '/:id',
  validatorHandler(obtainProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      let { id } = req.params;
      let body = req.body;
      const product = await service.update(id, body);
      res.json({
        message: 'updated',
        id: product,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  let { id } = req.params;
  const product = await service.delete(id);

  res.json({
    message: 'delete',
    deleted: product,
  });
});

module.exports = router;

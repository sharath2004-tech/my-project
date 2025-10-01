const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const productQueryController = require('../controllers/productQueryController');

// CRUD routes
router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

// Query routes
router.get('/category/:cat', productQueryController.getByCategory);
router.get('/by-color/:color', productQueryController.getByColor);

module.exports = router;

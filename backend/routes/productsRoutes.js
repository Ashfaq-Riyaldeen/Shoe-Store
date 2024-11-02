const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');
const isAuth = require('../middleware/isAuth');

// public Routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.get('/category/:category', productController.getProductsByCategory);

// authenticated routes
router.post('/', isAuth, productController.createProduct);
router.put('/:id', isAuth, productController.updateProduct);
router.delete('/:id', isAuth, productController.deleteProduct);

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json({ message: 'CORS headers added' });
  };

module.exports = router;
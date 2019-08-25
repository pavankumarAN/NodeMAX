const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminRoutes = require('./admin');
const productController = require('../controllers/products');

router.get('/', productController.getAllProducts);

module.exports = router;
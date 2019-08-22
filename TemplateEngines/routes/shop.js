const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminRoutes = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminRoutes.products;
    res.render('shop', {
        products,
        docTitle: "Shop",
        path: '/admin/shop'
    });
});

module.exports = router;
const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    //console.log(req.body);
    products.push({title : req.body.title});
 //   console.log('pro',products);
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
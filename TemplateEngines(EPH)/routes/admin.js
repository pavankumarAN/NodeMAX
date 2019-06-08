const path = require('path');
const express = require('express');
const router = express.Router();
const pathFinder = require('../helpers/path');


const products = [];
router.get('/add-product', (req,res,next) => {

    res.render('add-priduct')
   // res.sendFile(path.join(pathFinder, 'views', 'add-product.html'));
});

router.post('/add-product', (req,res,next)=> {
    res.render('add-product', {
        products.push({productTitle : req.body.productTitle});
        console.log(req.body);
        res.redirect('/');
    })
    // products.push({productTitle : req.body.productTitle});
    // console.log(req.body);
    // res.redirect('/');
});

exports.routes = router;
exports.products = products;

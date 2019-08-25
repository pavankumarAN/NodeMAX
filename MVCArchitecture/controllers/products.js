const Product = require('../models/product');

exports.getProduct =  (req, res, next) => {
    res.render('add-product', {
        docTitle : "Add-Product",
        path : '/admin/add-product'
    })
};

exports.postProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getAllProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            products,
            docTitle: "Shop",
            path: '/admin/shop'
        });
    });
};


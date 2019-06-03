const path = require('path');
const express = require('express');
const router = express.Router();
const pathFinder = require('../helpers/path');
const adminRoutes = require('./admin');

router.get('/', (req,res,next) => {
    //Below commented code will be used when there is no templating engine is used.
    // console.log('shop',adminRoutes.products);
    // res.sendFile(path.join(pathFinder, 'views', 'shop.html'));

    //Here we are using pug template engine and routing will be different as
    const products = adminRoutes.products;
    res.render('shop', {prod : products, shopTitle : 'Shop'});
    //Here you don't need to specify even extension of this file because 
    //app.set('views', 'views') will tell which file to use according to the template engine you used.
});

module.exports = router;
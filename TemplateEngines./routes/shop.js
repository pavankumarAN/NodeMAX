const path = require('path');
const express = require('express');
const router = express.Router();
const pathFinder = require('../helpers/path');

const adminRoutes = require('./admin');

router.get('/', (req,res,next) => {
    console.log(`shop ${adminRoutes.products}`);
    res.sendFile(path.join(pathFinder, 'views', 'shop.html'));
});

module.exports = router;
const path = require('path');
const express = require('express');
const router = express.Router();
const pathFinder = require('../helpers/path');

router.get('/', (req,res,next) => {
    res.sendFile(path.join(pathFinder, 'views', 'shop.html'));
});

module.exports = router;
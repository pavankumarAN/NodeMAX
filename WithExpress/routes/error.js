const path = require('path');
const express = require('express');
const router = express.Router();
const pathFinder = require('../helpers/path');

router.use((req,res,next)=> {
    res.sendFile(path.join(pathFinder, 'views', 'error.html'));
});

module.exports = router;
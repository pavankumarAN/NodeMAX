const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.use((req, res, next) => {
    res.render('error', {
        docTitle : 'Page not found',
        path : ''
    });
});

module.exports = router;
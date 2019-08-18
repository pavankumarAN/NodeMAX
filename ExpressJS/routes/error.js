const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'error.html'));
});

module.exports = router;
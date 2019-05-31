const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req,res,next) => {
    console.log("Home page");
    res.sendFile(path.join(__dirname, '../', 'views', 'homePage.html'));
})

router.get('/users', (req,res,next) => {
    res.sendFile(path.join(__dirname, '../' , 'views', 'users.html'));
    
});

;

module.exports = router;
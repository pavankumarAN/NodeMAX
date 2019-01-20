const express = require('express');

const router = express.Router();

router.get('/add-product',( req, res, next ) => {
    res.send(
        '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
} );

router.post('/message',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
} );


module.exports = router;
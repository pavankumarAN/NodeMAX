const express = require('express');

const app = express();

const adminRoutes =  require('./admin');

const shopRouter = require('./shop');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);

app.use(shopRouter);

app.use((req,res,next) => {
    res.send('<h1>Page not found</h1>');
});

app.listen(3302);
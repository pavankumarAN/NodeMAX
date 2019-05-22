const express = require("express");
const app = express();
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error = require('./routes/error');

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
// app.use(error);

app.listen(3003);
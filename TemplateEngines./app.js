const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error = require('./routes/error');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);
app.use(error);

app.listen(3003);
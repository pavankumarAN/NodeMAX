const express = require('express');
const path = require('path');
const app = express();

const userRoutes = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));
app.use(userRoutes);

app.listen(3003);
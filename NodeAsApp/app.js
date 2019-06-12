const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended:false}));
const users = [];


app.get('/', (req,res,next) => {
    res.render('index', {
        pageTitle : 'Users'
    });
});

app.get('/users', (req,res,next) => {
    res.render('users', {
        pageTitle : 'Add users' ,
        users:users, 
        hasUsers : users.length > 0
    });
});

app.post('/add-user', (req,res,next) => {
    users.push({name : req.body.username});
    res.render('users');
});

app.listen(3022);
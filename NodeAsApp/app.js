const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended:false}));



app.get('/', (req,res,next) => {
    res.render('index', {
        pageTitle : 'Add users'
    });
});

app.get('/users', (req,res,next) => {
    res.render('users', {
        pageTitle : 'Users',
        users: users, 
        hasUsers : users.length > 0
    });
});

app.post('/add-user', (req,res,next) => {
    users.push({name : req.body.username});
    res.render('users', {users});
});

app.listen(3022);
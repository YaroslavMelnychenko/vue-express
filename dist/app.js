var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

var db = require('./database/sequelize');

db.authenticate()
.then(() => console.log('Database connection established'))
.catch(err => console.error(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', require('./routes/users'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(function(err, req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = err.status || 500;
    res.json({ error: {
        status: err.status,
        message: err.message
    }});
});

module.exports = app;

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../database/sequelize');
var User = require('../database/models/User');
var bcrypt = require('bcrypt');

router.use(bodyParser.json());

router.all((req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	next();
});

router.route('/')
.get((req, res, next) => {
	User.findAll()
	.then(users => {
		res.statusCode = 200;
		res.json(users);
	}).catch(err => next(err));
})
.post((req, res, next) => {
	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password, 10)
	}).then(user => {
		res.statusCode = 200;
		res.json(user);
	}).catch(err => next(err));
});

module.exports = router;
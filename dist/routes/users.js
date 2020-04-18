var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.all((req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	next();
});

router.route('/')
.get((req, res, next) => {
	res.statusCode = 200;
	res.json({ username: "admin", admin: "true" });
});

module.exports = router;

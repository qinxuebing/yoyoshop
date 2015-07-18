var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('go to here');
  res.render('index', '../public/index.html');
});

module.exports = router;

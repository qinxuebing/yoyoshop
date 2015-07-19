var express = require('express');
var loadDress = require('./middleware/load_dress');
var router = express.Router();



/* GET users listing. */


router.get('/', function(req, res, next) {
    loadDress(function(docs){
        res.json(docs);
    });
});

module.exports = router;

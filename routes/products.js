var express = require('express');
var loadDress = require('./middleware/load_dress');
var router = express.Router();



/* GET users listing. */


router.get('/', function(req, res, next) {
    console.log('0000000000000000');
    loadDress(function(docs){
        console.log('555555555555',docs);
        res.json(docs);
    });
    console.log('444444444444444444');
});

module.exports = router;

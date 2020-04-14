var express = require('express');
var router = express.Router();
var contactModel = require("../model/contact");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/xem', function(req, res, next) {
  contactModel.find({},function(err, dulieu) {
    res.render('xem', { title: 'Xem sữ liệu' , data: dulieu});
    // res.json(dulieu); // return all todos in JSON format
  });
  
});

module.exports = router;

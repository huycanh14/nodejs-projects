var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tin-tuc', function(req, res, next) {
  res.render('tin', { title: 'Tin tức' });
});

router.get('/noi-dung', function(req, res, next) {
  var dulieu = {danhsach: ["Cảnh", "Huy", "1998"]}
  var data = {
    danhsach: dulieu,
    title: "Nội dung",
  }
  res.render('ndung', data);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
//  Trang about
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/post.html', function(req, res, next) {
  res.render('post', { title: 'Post' });
});

router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// Truyền params
router.get('/sp/:chitietsanpham', function(req, res, next){
  res.send("Đây là trang sản phẩm" + req.params.chitietsanpham);
})
module.exports = router;

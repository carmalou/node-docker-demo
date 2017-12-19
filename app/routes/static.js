var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('static/home', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('static/about', { title: 'About' });
});

module.exports = router;

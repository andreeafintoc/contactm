var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Management' });
});

router.get('/browse', function(req, res, next) {
  res.render('browse', { title: 'Browse through your contacts' });
});

module.exports = router;

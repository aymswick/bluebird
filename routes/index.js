var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Heading' });
});

router.get('/', function(req, res, next) {
  res.render('wiki', { title: 'Wiki' });
});

module.exports = router;

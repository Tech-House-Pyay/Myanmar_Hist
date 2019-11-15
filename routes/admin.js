var express = require('express');
var router = express.Router();
var admin=require('../model/Admin')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});

module.exports = router;

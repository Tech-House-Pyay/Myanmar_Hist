var express = require('express');
var router = express.Router();
var Eat=require('../model/eatAdrink');
var See = require('../model/seeAdo');

/* GET users listing. */
router.get('/home', function(req, res, next) {
  See.find(function (err,rtn) {
    if(err) throw err;
    res.render('users/home',{see:rtn})
  })

});

module.exports = router;

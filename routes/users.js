var express = require('express');
var router = express.Router();
var Eat=require('../model/eatAdrink');
var See = require('../model/seeAdo');
var Festival=require('../model/festivalAevent');
var Traveller=require('../model/travelleressential');
var Tour=require('../model/tour');
/* GET users listing. */
router.get('/home', function(req, res, next) {
  See.find(function (err,rtn) {
    if(err) throw err;
    res.render('users/home',{see:rtn})
  })

});
router.get('/festivalhome', function(req, res, next) {
Festival.find(function (err,rtn) {
    if(err) throw err;
    res.render('users/festivalhome',{festival:rtn})
  })

});
router.get('/travellerhome', function(req, res, next) {
Traveller.find(function (err,rtn) {
    if(err) throw err;
    res.render('users/travellerhome',{traveller:rtn})
  })

});
router.get('/tour',function (req ,res, next) {
  Tour.find(function(err,rtn){
    if(err) throw err;
    res.render('users/tour',{tour:rtn})
  })
});

router.get('/eathome',function (req ,res, next) {
  var query={categories:'Eat'};
  Eat.find(query,function(err,rtn){
    if(err) throw err;
    res.render('users/eathome',{eat:rtn})

});

});
module.exports = router;

var express = require('express');
var router = express.Router();
var Eat=require('../model/eatAdrink');
var See = require('../model/seeAdo');
var Festival=require('../model/festivalAevent');
var Traveller=require('../model/travelleressential');
var Tour=require('../model/tour');
/* GET users listing. */
router.get('/home', function(req, res, next) {
  var query={categories:'Arts'};
  See.find(query,function (err,rtn) {
    if(err) throw err;
    res.render('users/art',{see:rtn})
  })

});
router.get('/history', function(req, res, next) {
  var query={categories:'History'};
  See.find(query,function (err,rtn) {
    if(err) throw err;
    res.render('users/history',{see:rtn})
  })

});
router.get('/culture', function(req, res, next) {
  var query={categories:'Culture'};
  See.find(query,function (err,rtn) {
    if(err) throw err;
    res.render('users/culture',{see:rtn})
  })

});
router.get('/archi', function(req, res, next) {
  var query={categories:'Architecture'};
  See.find(query,function (err,rtn) {
    if(err) throw err;
    res.render('users/archi',{see:rtn})
  })

});
router.get('/nature', function(req, res, next) {
  var query={categories:'NatureAndWildlife'};
  See.find(query,function (err,rtn) {
    if(err) throw err;
    res.render('users/nature',{see:rtn})
  })
});
router.get('/festival', function(req, res, next) {
  var query={categories:'Festival'};
Festival.find(query,function (err,rtn) {
    if(err) throw err;
    res.render('users/festival',{festival:rtn})
  })

});
router.get('/event', function(req, res, next) {
  var query={categories:'Event'};
Festival.find(query,function (err,rtn) {
    if(err) throw err;
    res.render('users/event',{festival:rtn})
  })

});
router.get('/travellerhome', function(req, res, next) {
Traveller.find(function (err,rtn) {
    if(err) throw err;
    res.render('users/travellerhome',{traveller:rtn})
  })

});
router.get('/popular',function (req ,res, next) {
  var query={categories:'Popular Place'}
  Tour.find(query,function(err,rtn){
    if(err) throw err;
    res.render('users/popular',{tour:rtn})
  })
});
router.get('/worldhs',function (req ,res, next) {
  var query={categories:'World Heritage Sites'}
  Tour.find(query,function(err,rtn){
    if(err) throw err;
    res.render('users/worldhs',{tour:rtn})
  })
});
router.get('/eathome',function (req ,res, next) {
  var query={categories:'Eat'};
  Eat.find(query,function(err,rtn){
    if(err) throw err;
    res.render('users/eathome',{eat:rtn})

});

});
router.get('/drink',function (req ,res, next) {
  var query={categories:'Drink'};
  Eat.find(query,function(err,rtn){
    if(err) throw err;
    res.render('users/drink',{eat:rtn})

});

});
module.exports = router;

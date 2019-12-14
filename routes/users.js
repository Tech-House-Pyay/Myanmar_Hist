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
  var que={categories:'History'};
  See.find(que,function (err,rtn) {
    if(err) throw err;
    res.render('users/history',{see:rtn})
  })

});
router.get('/culture', function(req, res, next) {
  var quer={categories:'Culture'};
  See.find(quer,function (err,rtn) {
    if(err) throw err;
    res.render('users/culture',{see:rtn})
  })

});
router.get('/archi', function(req, res, next) {
  var qu={categories:'Architecture'};
  See.find(qu,function (err,rtn) {
    if(err) throw err;
    res.render('users/archi',{see:rtn})
  })

});
router.get('/nature', function(req, res, next) {
  var q={categories:'NatureAndWildlife'};
  See.find(q,function (err,rtn) {
    if(err) throw err;
    res.render('users/nature',{see:rtn})
  })
});
router.get('/festival', function(req, res, next) {
  var uery={categories:'Festival'};
Festival.find(uery,function (err,rtn) {
    if(err) throw err;
    res.render('users/festival',{festival:rtn})
  })

});
router.get('/event', function(req, res, next) {
  var ery={categories:'Event'};
Festival.find(ery,function (err,rtn) {
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
  var ry={categories:'Popular Place'}
  Tour.find(ry,function(err,rtn){
    if(err) throw err;
    res.render('users/popular',{tour:rtn})
  })
});
router.get('/worldhs',function (req ,res, next) {
  var y={categories:'World Heritage Sites'}
  Tour.find(y,function(err,rtn){
    if(err) throw err;
    res.render('users/worldhs',{tour:rtn})
  })
});
router.get('/eathome',function (req ,res, next) {
  var qy={categories:'Eat'};
  Eat.find(qy,function(err,rtn){
    if(err) throw err;
    res.render('users/eathome',{eat:rtn})

});

});
router.get('/drink',function (req ,res, next) {
  var qery={categories:'Drink'};
  Eat.find(qery,function(err,rtn){
    if(err) throw err;
    res.render('users/drink',{eat:rtn})

});

});
module.exports = router;

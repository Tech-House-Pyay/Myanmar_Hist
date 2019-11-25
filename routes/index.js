var express = require('express');
var router = express.Router();
var Admin=require('../model/Admin');
var SeeAdo=require('../model/seeAdo');
var FestivalAevent=require('../model/festivalAevent');
var Eat=require('../model/eatAdrink');
var Tour=require('../model/tour');
var Travelleressential=require('../model/travelleressential');
var isemail=require('isemail');
var passwordValidator=require('password-validator');
var schema=new passwordValidator();




schema
.is().min(8)
.is().max(100)
.has().uppercase()
.has().lowercase()
.has().digits()
.has().not().spaces()
.is().not().oneOf(['passw0rd','Password123']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/signup',function (req,res) {
  res.render('signup');

});
router.post('/signup',function (req,res) {
  var admin=new Admin();
  admin.name=req.body.name;
  admin.email=req.body.email;
  admin.password=req.body.password;

  admin.save(function (err,rtn) {
    if(err)throw err;
    res.redirect('/signin');

  });
});
router.get('/signin',function (req,res) {
  res.render('signin');

});
router.post('/signin',function (req,res) {
  Admin.findOne({email:req.body.email},function (err,admin) {
    if(err)throw err;
    console.log(admin);
    console.log(req.body.password);
    if(admin !=null && Admin.compare(req.body.password,admin.password)){
      req.session.admin={name:admin.name,email:admin.email,id:admin._id}
      res.redirect('/admin')
    }else {
      res.redirect('/signin')
    }

  });

});
router.post('/duemail',function (req,res) {
  Admin.findOne({email:(req.body.email)},function (err,rtn) {
    if(err)throw err;
    if(req.body.email!=''){
    if(rtn!= null || !isemail.validate(req.body.email)){
      res.json({status:true})
    }else{
      res.json({status:false})
    }
}
  })
})
router.post('/checka',function (req,res) {
  var sta=schema.validate(req.body.password);
  res.json({status:sta})
});
module.exports=router;

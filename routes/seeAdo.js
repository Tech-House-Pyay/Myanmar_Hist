var express=require('express');
var router=express.Router();
var SeeDo=require('../model/seeAdo');

router.get('/seeAdoadd',function (req,res) {
  res.render('seeAdo/SeeADoadd');

});
router.post('/seeAdoadd',function (req,res) {
  var sd=new SeeDo();
  sd.categories=req.body.categories;
  sd.title=req.body.title;
  sd.content=req.body.content;
  sd.save(function (err,rtn) {
    if(err)throw err;
    console.log(rtn);
    res.redirect('/seeAdo/seeAdolist');
  });


});
router.get('/seeAdolist',function (req,res) {
  SeeDo.find(function (err,rtn) {
    if(err)throw err;
    else{
      res.render('seeAdo/SeeADolist',{seeAdo:rtn});
    }

  })


});


module.exports=router;

var express=require('express');
var router=express.Router();
var TravellerE=require('../model/travelleressential');

router.get('/TEssentialadd',function (req,res) {
  res.render('travelleressential/TEssentialadd');

});
router.post('/TEssentialadd',function (req,res) {
  var TE=new TravellerE();

  TE.title=req.body.title;
  TE.content=req.body.content;
  TE.save(function (err,rtn) {
    if(err)throw err;
    console.log(rtn);
    res.redirect('/travelleressential/TEssentiallist');
  });


});
router.get('/TEssentiallist',function (req,res) {
  TravellerE.find(function (err,rtn) {
    if(err)throw err;
    else{
      res.render('travelleressential/TEssentiallist',{travelleressential:rtn});
    }

  })


});
router.get('/TEssentialdetails/:id',function (req,res) {
  console.log(req.params.id);
  TravellerE.findById(req.params.id,function (err,rtn) {
    if(err)throw err;
    else {
      res.render('travelleressential/TEssentialdetails',{travelleressential:rtn});
    }

  });

});
router.get('/TEssentialupdate/:id',function (req,res) {
  TravellerE.findById(req.params.id,function (err,rtn) {
    if(err)throw err;
    else {
      res.render('travelleressential/TEssentialupdate',{travelleressential:rtn})
    }

  });

});
router.post('/TEssentialupdate',function (req,res) {
  var update={
    title:req.body.title,
    content:req.body.content
  }
  TravellerE.findByIdAndUpdate(req.body.id,{$set:update},function (err,rtn) {
       if(err)throw err;
       else{
         res.redirect('/travelleressential/TEssentialdetails/'+req.body.id);
       }

  })

})
router.get('/TEssentialdelete/:id',function (req,res) {
  TravellerE.findByIdAndRemove(req.params.id,function (err,rtn) {
    if(err)throw err;
    else {
      res.redirect('/travelleressential/TEssentiallist');
    }

  })

})
module.exports=router;

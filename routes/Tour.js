var express=require('express');
var router=express.Router();
var Tour=require('../model/tours');

router.get('/touradd',function (req,res) {
  res.render('Tour/touradd');

});
router.post('/touradd',function (req,res) {
  var sd=new Tour();
  sd.categories=req.body.categories;
  sd.title=req.body.title;
  sd.content=req.body.content;
  sd.save(function (err,rtn) {
    if(err)throw err;
    console.log(rtn);
    res.redirect('/Tour/tourlist');
  });


});
router.get('/tourlist',function (req,res) {
  Tour.find(function (err,rtn) {
    if(err)throw err;
    else{
      res.render('Tour/tourlist',{Tour:rtn});
    }

  })


});
router.get('/tourdetail/:id',function (req,res) {
  console.log(req.params.id);
  Tour.findById(req.params.id,function (err,rtn) {
    if(err)throw err;
    else {
      res.render('Tour/tourdetail',{Tour:rtn});
    }

  });

});
router.get('/tourupdate/:id',function (req,res) {
  Tour.findById(req.params.id,function (err,rtn) {
    if(err)throw err;
    else {
      res.render('Tour/tourupdate',{Tour:rtn})
    }

  });

});
router.post('/tourupdate',function (req,res) {
  var update={
    categories:req.body.categories,
    title:req.body.title,
    content:req.body.content
  }
Tour.findByIdAndUpdate(req.body.id,{$set:update},function (err,rtn) {
       if(err)throw err;
       else{
         res.redirect('/Tour/tourdetail/'+req.body.id);
       }

  })

})
router.get('/tourdelete/:id',function (req,res) {
  Tour.findByIdAndRemove(req.params.id,function (err,rtn) {
    if(err)throw err;
    else {
      res.redirect('/Tour/tourlist');
    }

  })

})
module.exports=router;

var express=require('express');
var router=express.Router();
var Eat=require('../model/eatAdrink');

router.get('/eat',function (req,res) {
  res.render('Eat/eatadd');

});
router.post('/eat',function (req,res) {
  var eat=new Eat();
  eat.categories=req.body.categories;
  eat.title=req.body.title;
  eat.content=req.body.content;
  eat.save(function (err,rtn) {
    if(err)throw err;
    console.log(rtn);
    res.redirect('/Eat/eatlist');
  });


});
router.get('/Eatlist',function (req,res) {
  Eat.find(function (err,rtn) {
    if(err)throw err;
    else{
      res.render('Eat/eatlist',{Eat:rtn});
    }

  })


});
router.get('/eatdetail/:id',function(req,res){
  console.log(req.params.id);
    Eat.findById(req.params.id,function(err,rtn){
      if(err) throw err;
      res.render('Eat/eatdetail',{Eat:rtn});
  });
});



  router.get('/Eatupdate/:id',function(req,res){
    Eat.findById(req.params.id,function(err,rtn){
        if(err) throw err;
        res.render('Eat/eatupdate',{Eat:rtn});

    });

  });
  router.post('/eatupdate',function(req,res){
    var update={
      categories: req.body.categories,
      title: req.body.title,
      content: req.body.content
    }
  Eat.findByIdAndUpdate(req.body.id,{$set: update},function(err,rtn){
      if(err) throw err;
      res.redirect('/Eat/eatdetail/'+req.body.id);
    })
  })
  router.get('/eatdelete/:id',function(req,res){
    Eat.findByIdAndRemove(req.params.id,function(err,rtn){
      if(err) throw err;
      res.redirect('/Eat/eatlist');
    });
  });

module.exports=router;

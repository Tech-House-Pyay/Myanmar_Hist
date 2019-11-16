var express=require('express');
var router=express.Router();
var SeeDo=require('../model/seeAdo');
var multer=require('multer');
var upload=multer({dest:'public/image/uploads'});
router.get('/seeAdoadd',function (req,res) {
  res.render('seeAdo/SeeADoadd');

});
router.post('/seeAdoadd',upload.single('photo'),function (req,res) {
  var sd=new SeeDo();
  sd.categories=req.body.categories;
  sd.title=req.body.title;
  sd.content=req.body.content;
  if(req.file) sd.imgUrl='/image/uploads/'+req.file.filename;
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
router.get('/seeAdodetail/:id',function (req,res) {
  console.log(req.params.id);
  SeeDo.findById(req.params.id,function (err,rtn) {
    if(err)throw err;
    else {
      res.render('seeAdo/SeeADodetail',{seeAdo:rtn});
    }

  });

});
router.get('/seeAdoupdate/:id',function (req,res) {
  SeeDo.findById(req.params.id,function (err,rtn) {
    if(err)throw err;
    else {
      res.render('seeAdo/SeeADoupdate',{seeAdo:rtn})
    }

  });

});
router.post('/seeAdoupdate',function (req,res) {
  var update={
    categories:req.body.categories,
    title:req.body.title,
    content:req.body.content
  }
  SeeDo.findByIdAndUpdate(req.body.id,{$set:update},function (err,rtn) {
       if(err)throw err;
       else{
         res.redirect('/seeAdo/seeAdodetail/'+req.body.id);
       }

  })

})
router.get('/seeAdodelete/:id',function (req,res) {
  SeeDo.findByIdAndRemove(req.params.id,function (err,rtn) {
    if(err)throw err;
    else {
      res.redirect('/seeAdo/seeAdolist');
    }

  })

})
module.exports=router;

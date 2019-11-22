var express=require('express');
var router=express.Router();
var FE=require('../model/festivalAevent');
var Admin=require('../model/Admin');
var multer=require('multer');
var upload=multer({dest:'public/image/festivalphoto'});


router.get('/faeventadd',function (req,res) {
  res.render('festivalAevent/FestivalAEventadd');

});
router.post('/faeventadd',upload.single('photo'),function (req,res) {
  var dd=new FE();
  dd.categories=req.body.categories;
  dd.title=req.body.title;
  dd.content=req.body.content;
  if(req.file)dd.imgUrl='/image/festivalphoto/'+req.file.filename;
  dd.save(function (err,rtn) {
    if(err)throw err;

    console.log(rtn);
      res.redirect('/festivalAevent/faeventlist');

  });
});
router.get('/faeventlist',function (req,res) {
  FE.find(function (err,rtn) {
    if(err)throw err;
    res.render('festivalAevent/FestivalAEventlist',{festivalAevent:rtn});

  });

});

router.get('/faeventdetail/:id',function (req,res) {
  console.log(req.params.id);
  FE.findById(req.params.id,function (err,rtn) {
    if(err)throw err;
    else {
      res.render('festivalAevent/FestivalAEventdetail',{festivalAevent:rtn});
    }

  });

});
router.get('/faeventupdate/:id',upload.single('photo'),function (req,res) {
  FE.findById(req.params.id,function (err,rtn) {
    if(err)throw err;
    res.render('festivalAevent/FestivalAEventupdate',{festivalAevent:rtn})

  });

});
router.post('/faeventupdate',function (req,res) {
  var update={
    categories:req.body.categories,
    title:req.body.title,
    content:req.body.content
  }
  if(req.file) update.imgUrl='/image/festivalphoto/'+req.file.filename;
  FE.findByIdAndUpdate(req.body.id,{$set:update},function (err,rtn) {
    if(err)throw err;
    res.redirect('/festivalAevent/faeventdetail/'+req.body.id);

  });

});
router.get('/faeventdelete/:id',function (req,res) {
  FE.findByIdAndRemove(req.params.id,function (err,rtn) {
    if(err)throw err;
    res.redirect('/festivalAevent/faeventlist');

  })

})
module.exports=router;

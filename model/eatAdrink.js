var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt');
var AdminSchema=new Schema({
categories:{
    type:String,
    required:true
  },
title:{
    type:String,
    required:true,
    unique:true
  },
content:{
    type:String,
  required:true
},
imgUrl:{
  type:String,
  required:true
}
});

module.exports=mongoose.model('eatAdrink',AdminSchema);

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var eat&drinkSchema=new Schema({

  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  }

});
module.exports=mongoose.model('eat&drink',eat&drinkSchema);

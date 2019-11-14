var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var eatAdrinkSchema=new Schema({

  categories:{
    type:String,
    requires:true
  },

  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  }

});
module.exports=mongoose.model('eatAdrink',eatAdrinkSchema);

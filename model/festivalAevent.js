var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var festival&eventSchema=new Schema({

  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  }

});
module.exports=mongoose.model('festival&event',festival&eventSchema);

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var toursSchema=new Schema({
  categories:{
    type:String,
    required:true
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
module.exports=mongoose.model('tours',toursSchema);

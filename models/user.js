const mongoose=require("mongoose");
// =============================
const schema =mongoose.Schema;
const item=new schema({
    firstName:String,
    lastName:String,
    email:String,
    telephone:Number,
    age:Number,
    country:String,
    gender:String
},{timestamps:true});
// ===========================
const User=mongoose.model("user",item);

module.exports=User;
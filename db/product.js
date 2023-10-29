const mongoose=require ('mongoose');

const userSchema=new mongoose.Schema({
    name: String,
    price:String,
    category:String,
    userId:String,
    company:String,
    isCart:{
        type:Boolean,
        default:false
    },
    image:Buffer
});

module.exports=mongoose.model("products",userSchema);
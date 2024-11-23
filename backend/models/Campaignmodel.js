const mongoose=require("mongoose");

const Campaignscema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
},{timestamps:true});

const campaignmodel=mongoose.model("Campaign",Campaignscema);

module.exports=campaignmodel;
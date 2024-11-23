const mongoose=require("mongoose");

const Newsschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
},{timestamps:true});

const newsmodel=mongoose.model("News",Newsschema);

module.exports=newsmodel;
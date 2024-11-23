const mongoose=require("mongoose");

const Galleryschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
},{timestamps:true});

const gallerymodel=mongoose.model("Photo",Galleryschema);

module.exports=gallerymodel;
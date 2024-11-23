const express=require("express");
const adminmodel = require("./models/Adminmodel");
const app=express();
const port=process.env.PORT || 4000;
const cors=require("cors");
const bodyparser=require("body-parser")
const database=require("./config/databse");
const multer=require("multer");
const newsmodel = require("./models/Newsmodel");
const campaignmodel = require("./models/Campaignmodel");
const gallerymodel = require("./models/Gallerymodel");
const fs = require("fs");
const path = require("path");
app.use(express.json())
app.use(cors())
app.use(express.static("public"))
database();

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images")
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}_${file.originalname}`)
    }

});
const uploadimage=multer({storage:storage});
app.get("/",(req,res)=>{
    try{
         res.send("hello shihab")
    }catch(err){
        console.log(err)
    }
});
app.get("/admin",async(req,res)=>{
    try{
         const count_news=await newsmodel.find().countDocuments();
         const count_campaign=await campaignmodel.find().countDocuments();
         const count_gallery=await gallerymodel.find().countDocuments();
         res.send({count_news,count_campaign,count_gallery})
    }catch(err){
        console.log(err)
    }
});

// registration controller
app.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body;
        console.log(email,password)
        const find_email=await adminmodel.findOne({email:email});
        if(find_email){
            if(find_email.password==password){
                         res.send({success:true,message:"Login successful!",admin_info:find_email})
            }else{
            res.send({success:false,message:"Email and Password did not match!"})
            }
        }
            res.send({success:false,message:"Email and Password did not match!"})
    } catch (error) {
        console.log(error)
    }
})
app.get("/profile",async (req,res)=>{
    try {
       const find_admin=await adminmodel.find();
       res.send({admin_info:find_admin})
    } catch (error) {
        console.log(error)
    }
});
app.post("/update-profile",async (req,res)=>{
    try {
        const {email,password}=req.body;
       const find_admin=await adminmodel.findOne({email:email});
       if(find_admin){
               const update_data=await adminmodel.findByIdAndUpdate({_id:find_admin._id},{$set:{email,password}})
                  res.send({success:true})
            }
    } catch (error) {
        console.log(error)
    }
})
// -------------- news--------------
app.post("/add-news",uploadimage.single("file"),async(req,res)=>{
    try {
        const {title,description}=req.body;
        const add_news=new newsmodel({
            title,description,
            photo:req.file.filename
        })
        if(add_news){
            add_news.save();
            res.send({success:true,message:"okkkk"})
        }
    } catch (error) {
        console.log(error)
    }
})
app.get("/news",async(req,res)=>{
    try {
           const all_news=await newsmodel.find();
           if(all_news){
                 res.send({success:true,news:all_news})
           } 
    } catch (error) {
        console.log(error)
    }
});
app.get("/delete-news/:id",async (req,res)=>{
    try {
         const find_id=await newsmodel.findByIdAndDelete({_id:req.params.id});
         if(find_id){
                  fs.unlinkSync(`./public/images/${find_id.photo}`)
                 res.send({success:true,message:"News has been deleted!"})
         }
    } catch (error) {
        console.log(error)
    }
});
app.get("/find-news/:id",async (req,res)=>{
    try {
         const find_news=await newsmodel.findOne({_id:req.params.id});
         console.log(find_news)
         if(find_news){
                 res.send({news:find_news})
         }
    } catch (error) {
        console.log(error)
    }
})
app.post("/update-news/:id",uploadimage.single("file"),async (req,res)=>{
    try {
        const {title,description}=req.body;
         const update_news=await newsmodel.findByIdAndUpdate({_id:req.params.id},{$set:{title,description,photo:req.file.filename}});
         if(update_news){
                 res.send({success:true})
         }
    } catch (error) {
        console.log(error)
    }
})
// add campaign
app.post("/add-campaign",uploadimage.single("file"),async(req,res)=>{
    try {
        const {title,description,address,time}=req.body;
        const add_campaign=new campaignmodel({
            title,description,address,time,
            photo:req.file.filename,

        })
        if(add_campaign){
            add_campaign.save();
            res.send({success:true,message:"okkkk"})
        }
    } catch (error) {
        console.log(error)
    }
})
app.get("/campaign",async(req,res)=>{
    try {
           const all_campaign=await campaignmodel.find();
           if(all_campaign){
                 res.send({success:true,campaign:all_campaign})
           } 
    } catch (error) {
        console.log(error)
    }
});
app.get("/find-campaign/:id",async (req,res)=>{
    try {
         const find_campaign=await campaignmodel.findOne({_id:req.params.id});
         if(find_campaign){
                 res.send({campaign:find_campaign})
         }
    } catch (error) {
        console.log(error)
    }
})
app.post("/update-campaign/:id",uploadimage.single("file"),async (req,res)=>{
    try {
        const {title,description,address,time}=req.body;
         const update_campaign=await campaignmodel.findByIdAndUpdate({_id:req.params.id},{$set:{title,description,address,time,photo:req.file.filename}});
         if(update_campaign){
                 res.send({success:true})
         }
    } catch (error) {
        console.log(error)
    }
})
app.get("/delete-campaign/:id",async (req,res)=>{
    try {
         const find_id=await campaignmodel.findByIdAndDelete({_id:req.params.id});
         if(find_id){
              fs.unlinkSync(`./public/images/${find_id.photo}`)
                 res.send({success:true,message:"News has been deleted!"})
         }
    } catch (error) {
        console.log(error)
    }
});
// add gallery
app.post("/add-gallery",uploadimage.single("file"),async(req,res)=>{
    try {
        const {title}=req.body;
        const add_gallery=new gallerymodel({
            title,
            photo:req.file.filename,

        })
        if(add_gallery){
            add_gallery.save();
            res.send({success:true,message:"okkkk"})
        }
    } catch (error) {
        console.log(error)
    }
})
app.get("/gallery",async(req,res)=>{
    try {
           const all_gallery=await gallerymodel.find();
           console.log(all_gallery)
           if(all_gallery){
                 res.send({success:true,gallery:all_gallery})
           } 
    } catch (error) {
        console.log(error)
    }
});
app.get("/find-gallery/:id",async (req,res)=>{
    try {
         const find_gallery=await gallerymodel.findOne({_id:req.params.id});
         if(find_gallery){
                 res.send({gallery:find_gallery})
         }
    } catch (error) {
        console.log(error)
    }
})
app.get("/delete-gallery/:id",async (req,res)=>{
    try {
         const find_id=await gallerymodel.findByIdAndDelete({_id:req.params.id});
         if(find_id){
              fs.unlinkSync(`./public/images/${find_id.photo}`)
                 res.send({success:true,message:"News has been deleted!"})
         }
    } catch (error) {
        console.log(error)
    }
});
app.post("/update-gallery/:id",uploadimage.single("file"),async (req,res)=>{
    try {
        const {title}=req.body;
         const update_gallery=await gallerymodel.findByIdAndUpdate({_id:req.params.id},{$set:{title,photo:req.file.filename}});
         if(update_gallery){
                 res.send({success:true})
         }
    } catch (error) {
        console.log(error)
    }
});
app.listen(4000,()=>{
    console.log(`Your server is running on ${port}`)
})
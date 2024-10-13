const express=require('express');
const app=express();
const port=4000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
const moment=require('moment');

// =================== imports 
const mongoose=require("./config/connect");
const User=require('./models/user');
var methodOverride=require('method-override');
app.use(methodOverride('_method'));

// ========================== render 
app.get("/user/addUser",(req,res)=>{res.render("user/addUser.ejs");});
// ======================= post  : save data :
app.post("/",async(req,res)=>{
    try{
        let usr=new User(req.body);
        let msg = await usr.save();
        res.redirect('/');
    }
    catch(err){res.send(err);}
});
// =================== get : get data
app.get("/",async(req,res)=>{
    try{ 
        let result = await User.find();
        res.render("home.ejs",{arr:result,moment:moment});
    }
    catch(err){res.send(err)}
});
// ======================= post : delete:
app.delete("/:id",async(req,res)=>{
    try{
        let msg =await User.deleteOne({_id:req.params.id});
        res.redirect("/");
    }
    catch(err){res.send(err);}
});
// ====================================  details :get
app.get("/user/details/:id",async(req,res)=>{
    try{
        let usr=await User.findById(req.params.id);
        res.render("user/details.ejs",{user:usr,moment:moment});
    }
    catch(err){res.send(err)}
});
// ================================= update : get
app.get("/user/update/:id",async(req,res)=>{
    try{
        let usr=await User.findById(req.params.id);
        res.render("user/update.ejs",{user:usr});
    }
    catch(err){res.send(err)}
});
app.put('/update/:id',async(req,res)=>{
    try{
        let usr=await User.updateOne({_id:req.params.id},req.body);
        res.redirect("/");
    }
    catch(err){res.send(err)}
});
// ======================
// delete from page update : 

app.delete('/deleteCustomer/:id',async(req,res)=>{
    try{
        let msg =await User.deleteOne({_id:req.params.id});
        res.redirect("/");
    }
    catch(err){res.send(err);} 
});
// ===============================
// let resultSearch;
app.post("/search",async(req,res)=>{
    try{
        let mot=req.body.search.trim();
        let resultSearch= await User.find({$or:[{firstName:mot},{lastName:mot},{country:mot},{email:mot},{gender:mot}]});
        res.render("user/search.ejs",{arr:resultSearch,moment:moment});
    }
    catch(err){res.send(err);}
});
// ================================
app.listen(port,(req,res)=>{console.log(`work on port ${port}`);});

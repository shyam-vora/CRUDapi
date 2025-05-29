const mongoose=require("mongoose");
const v=require("../models/Myvehicles");

const User=mongoose.Schema({
     name:String,
     phnNumber:Number,
     email:String,
     password:String,
     vehicles: [{ type: new mongoose.Schema({color:String}) }]
}, { timestamps: true })


module.exports=mongoose.model("user",User)
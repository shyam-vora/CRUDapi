const mongoose=require("mongoose");
const v=require("../models/Myvehicles");

const User=mongoose.Schema({
     name:String,
     phnNumber:Number,
     email:String,
     password:String,
     vehicals: [{ type: mongoose.Schema.Types.ObjectId, ref: "vehical" }]
}, { timestamps: true })


module.exports=mongoose.model("user",User)
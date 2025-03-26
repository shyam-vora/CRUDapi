const mongoose=require("mongoose");

const Vehical=mongoose.Schema({
    vehicalNum: Number,
    vehicalModel : String,
    vehicalColor : String,
}, { timestamps: true })


module.exports=mongoose.model("vehical",Vehical)
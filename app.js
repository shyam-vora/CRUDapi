const express=require("express");
const  UserRouter=require("./routes/User")
const VehicleRouter=require("./routes/Myvehicles")
const app=express();
const { default: mongoose } = require("mongoose");
require("dotenv").config()
const bodyParser=require("body-parser")

app.use(bodyParser.json())
app.use("/",UserRouter)
app.use("/Vehicle",VehicleRouter)

const PORT = process.env.PORT || 2000;

const connectDB=async()=>{
   
    try{
        await mongoose.connect(process.env.connecationurl,{
            useNewUrlParser: true,
        })
        console.log("connect to DB")
    }
    catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); 
    }
}

connectDB();

app.listen(2000,()=>{
    console.log("server is running");
    
})

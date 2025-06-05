const mongoose=require("mongoose");

const suggestionSchema=new mongoose.Schema(
    { user: { type: String, required: true },   
  message: { type: String, required: true },
    }
);

module.exports=mongoose.model("suggestion",suggestionSchema);
const mongoose = require("mongoose");

const VehicalSchema = mongoose.Schema({
  vehicalNum: {
    type: String,
    required: [true, "Vehicle number is required"],
    match: [/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/, "Vehicle number format is invalid"] // e.g. GJ01AB1234
  },
  vehicalModel: {
    type: String,
    required: [true, "Vehicle model is required"],
    minlength: [2, "Vehicle model must be at least 2 characters long"]
  },
  vehicalColor: {
    type: String,
    required: [true, "Vehicle color is required"]
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"]
  }
}, { timestamps: true });   

module.exports = mongoose.model("Vehical", VehicalSchema);

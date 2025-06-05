const mongoose = require("mongoose");
const { title } = require("process");


const dashboardSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Vehicle number is required"],
  },
  subtitle: {
    type: String,
    required: [true, "Vehicle model is required"],
  },
  color: {
    type: String,
    required: [true, "Vehicle color is required"]
  },
}, { timestamps: true });
module.exports = mongoose.model("Vehical", VehicalSchema);

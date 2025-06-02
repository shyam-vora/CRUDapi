const mongoose = require("mongoose");
const vehicle = require("./Vehicle");

const UserSchema = mongoose.Schema(
  {
    name: String,
    houseNo: { type: String, unique: true },
    phone: Number,
    email: String,
    password: String
  },
  { timestamps: true }
);

UserSchema.virtual("vehicles", {
  ref: "Vehical",
  localField: "_id",
  foreignField: "userId"
});

UserSchema.set("toObject", { virtuals: true });
UserSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("User", UserSchema);

const User = require("../models/User");
const Vehical = require("../models/Vehicle");

/// create vehical
exports.createVehical = async (req, res) => {
  const { vehicalNum, vehicalModel, vehicalColor, userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    const vehicle = await Vehical.create({
      vehicalNum,
      vehicalModel,
      vehicalColor,
      userId,
    });
    res.status(200).json(vehicle);
  } catch (e) {
    if (e.name === "ValidationError") {
      const errors = {};
      for (let field in e.errors) {
        errors[field] = e.errors[field].message;
      }
      return res.status(400).json({ errors });
    }
    if (e.code === 11000) {
      return res
        .status(400)
        .json({
          error: "This vehicle number is already registered for this user.",
        });
    }
    res.status(500).json({ error: e.message });
  }
};

/// get vehicals by user
exports.getVehicalByUserId = async (req, res) => {
  try {
    const vehicals = await Vehical.find({ userId: req.body.userId });
    res.json(vehicals);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

/// update vehical
exports.updateVehical = async (req, res) => {
  try {
    const vehicle = await Vehical.findByIdAndUpdate(
      req.body.vehicleId,
      req.body,
      { new: true }
    );
    res.json(vehicle);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// delete vehical
exports.deleteVehical = async (req, res) => {
  try {
    const vehicle = await Vehical.findByIdAndDelete(req.body.vehicleId);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.json(vehicle);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

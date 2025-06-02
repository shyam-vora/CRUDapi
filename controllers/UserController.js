const User = require("../models/User");

/// create user
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

/// read all user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("vehicles").lean();
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

/// read one user
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId).populate('vehicles').lean();
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

/// update user
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (e) {
    res.status(400).json({ error: err.message });
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.body.userId);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const User = require("../models/User");

// Get all users except the logged-in user
exports.getOtherUsers = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const users = await User.find({ _id: { $ne: userId } }).populate("vehicles").lean();

    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

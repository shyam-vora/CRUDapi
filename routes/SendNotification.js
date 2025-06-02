const express = require("express");
const router = express.Router();
const NotificationController = require("../controllers/NotificationController");
const User = require("../models/User");

router.post("/send-notification", async (req, res) => {
  const users = await User.find({ fcmToken: { $exists: true } });
  
  for (let user of users) {
    await NotificationController.sendFCMNotification(user.fcmToken, "New Society Notification", "Please check the app");
  }

  res.json({ message: "Notifications sent" });
});

module.exports = router;

const axios = require("axios");

exports.sendFCMNotification = async (fcmToken, title, body)=> {
  const serverKey = process.env.FCM_SERVER_KEY;
  const message = {
    to: fcmToken,
    notification: {
      title,
      body
    }
  };

  await axios.post("https://fcm.googleapis.com/fcm/send", message, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `key=${serverKey}`
    }
  });
}

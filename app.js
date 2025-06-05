const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(express.json());

// Routes
app.use("/api/user", require("./routes/User"));
app.use("/api/vehicle", require("./routes/Myvehicles"));
app.use("/api/notification", require("./routes/SendNotification"));
// app.use("/dashboard",require("./routes/dashboard"));  
app.use('/polls',require("./routes/poll"));
app.use('/suggestion',require("./routes/suggetion"));

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;

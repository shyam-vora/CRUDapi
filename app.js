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

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;

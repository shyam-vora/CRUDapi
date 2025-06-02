const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", require("./routes/User"));
app.use("/api/vehicle", require("./routes/Myvehicles"));

// Health check
app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;

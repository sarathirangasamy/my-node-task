// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3333;

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Define your routes
app.use("/api", require("./job-entry/job-entry-routes"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const students = require("./routes/api/students");
const path = require('path');
require('dotenv').config();

// Connecting to MongoDB
connectDB();

// Initiating the app
const app = express();

// Enabling CORS here for safety of access of info from other domains
app.use(cors());
// Handle JSON parsing properly
app.use(express.json());
// Use the API group instead of multiple paths for multiple routes
app.use("/api/students", students); // API routes first

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        mongoose.set("strictQuery", true)
        if (!process.env.DB_URI) {
            throw new Error("DB_URI environment variable is not defined.");
            // Prevent further execution if DB_URI is not set
        }
        await mongoose.connect(process.env.DB_URI);
        console.log("Successfully connected to MongoDB");
    }
    catch(err){
        console.error(err.message);
        // Optionally handle the error without exiting the process
        // process.exit(1);
    }
};

module.exports = connectDB;
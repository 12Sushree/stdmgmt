const mongoose = require("mongoose");

// Student Schema
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    honors: {
        type: String,
        required: true,
        trim: true
    },
    join_year: {
        type: Number,
        required: true
    },
    dob: {
        type: Date
    },
    phno: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);
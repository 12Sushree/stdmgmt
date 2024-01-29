const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    ID: {
        type: Number,
        required: true
    },
    Honors: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    DOB: {
        type: Date
    },
    PhnNo: {
        type: Number,
        required: true
    }
})

module.exports = Student;
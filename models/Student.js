const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    honors: {
        type: String,
        required: true
    },
    join_year: {
        type: Number,
        required: true
    },
    dob: {
        type: Date
    },
    phno: {
        type: Number,
        required: true
    }
})

module.exports = Student = mongoose.model('student',StudentSchema );
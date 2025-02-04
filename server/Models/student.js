const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const StudentModel = mongoose.model("Students", studentSchema);

module.exports = StudentModel;
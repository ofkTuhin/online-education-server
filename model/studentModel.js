const mongoose = require("mongoose");
const { studentSchema } = require("../schema/studentSchema");

module.exports.Student = new mongoose.model("Student", studentSchema);

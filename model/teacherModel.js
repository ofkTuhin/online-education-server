const mongoose = require("mongoose");
const { teacherSchema } = require("../schema/teacherSchema");

module.exports.Teacher = new mongoose.model("Teacher", teacherSchema);

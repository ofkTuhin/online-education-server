const mongoose = require("mongoose");
const { classSchema } = require("../schema/classSchema");

module.exports.Class = new mongoose.model("Class", classSchema);

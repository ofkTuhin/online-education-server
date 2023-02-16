const mongoose = require("mongoose");
const { adminSchema } = require("../schema/adminSchema");

module.exports.Admin = new mongoose.model("Admin", adminSchema);

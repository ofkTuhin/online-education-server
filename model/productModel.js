const mongoose = require("mongoose");
const { productSchema } = require("../schema/productSchema");

module.exports.Product = new mongoose.model("product", productSchema);

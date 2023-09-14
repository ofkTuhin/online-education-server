const express = require("express");
const productController = require("../controller/prodcutController");
const productRouter = express.Router();

productRouter
  .route("/")
  .get(productController.getAllProduct)
 

module.exports = productRouter;

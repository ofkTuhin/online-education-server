const express = require("express");
const productController = require("../controller/prodcutController");
const productRouter = express.Router();

productRouter
  .route("/")
  .get(productController.getAllProduct)
 
productRouter.patch("/:id",productController.updateComment)
productRouter.get("/:id",productController.getSingleProduct)

productRouter.get("/comment/:id",productController.getComment)

module.exports = productRouter;

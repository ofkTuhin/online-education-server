const express = require("express");
const adminController = require("../controller/adminController");
const adminRouter = express.Router();

adminRouter
  .route("/")
  .get(adminController.getAllAdmin)
  .post(adminController.postAdmin);

module.exports = adminRouter;

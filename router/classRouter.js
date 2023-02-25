const express = require("express");
const classController = require("../controller/classController");
const classRouter = express.Router();

classRouter
  .route("/")
  .get(classController.getAllClass)
  .post(classController.postClass);

module.exports = classRouter;

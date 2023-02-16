const express = require("express");
const studentController = require("../controller/studentController");
const studentRouter = express.Router();

studentRouter
  .route("/")
  .get(studentController.getAllStudent)
  .post(studentController.postStudent);

module.exports = studentRouter;

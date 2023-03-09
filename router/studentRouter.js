const express = require("express");
const studentController = require("../controller/studentController");
const studentRouter = express.Router();

studentRouter
  .route("/")
  .get(studentController.getAllStudent)
  .post(studentController.postStudent);

studentRouter.get("/login", studentController.getLoginStudent);

module.exports = studentRouter;

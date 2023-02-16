const express = require("express");
const teacherController = require("../controller/teacherController");
const teacherRouter = express.Router();

teacherRouter
  .route("/")
  .get(teacherController.getAllTeacher)
  .post(teacherController.postTeacher);

module.exports = teacherRouter;

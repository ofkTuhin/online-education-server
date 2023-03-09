const express = require("express");
const teacherController = require("../controller/teacherController");
const teacherRouter = express.Router();

teacherRouter
  .route("/")
  .get(teacherController.getAllTeacher)
  .post(teacherController.postTeacher);

teacherRouter.get("/login", teacherController.getLoginTeacher);

module.exports = teacherRouter;

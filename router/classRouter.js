const express = require("express");
const classController = require("../controller/classController");
const classRouter = express.Router();

classRouter
  .route("/")
  .get(classController.getAllClass)
  .post(classController.postClass);

classRouter.get("/:id", classController.getSingleClass);
classRouter.get("/teacherData/:email", classController.getClassByTeacher);

module.exports = classRouter;

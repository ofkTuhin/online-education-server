const express = require("express");
const classController = require("../controller/classController");
const classRouter = express.Router();
const multer = require("multer");
const upload = multer();

classRouter
  .route("/")
  .get(classController.getAllClass)
  .post(upload.any(), classController.postClass);

classRouter.get("/:id", classController.getSingleClass);
classRouter.get("/teacherData/:email", classController.getClassByTeacher);

module.exports = classRouter;

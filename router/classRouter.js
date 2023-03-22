const express = require("express");
const classController = require("../controller/classController");
const {
  authenticateGoogle,
  uploadFileOnDrive,
} = require("../middleware/googleAuth");
const { multer } = require("../middleware/multer");
const classRouter = express.Router();

classRouter
  .route("/")
  .get(classController.getAllClass)
  .post(classController.postClass);

classRouter.get("/:id", classController.getSingleClass);
classRouter.get("/teacherData/:email", classController.getClassByTeacher);
classRouter.delete("/delete-class/:id", classController.deleteClass);

classRouter.get("/file/pdf", classController.getFile);

classRouter.post(
  "/upload-file",
  multer.single("file"),
  classController.uploadPdf
);

module.exports = classRouter;

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

classRouter.post(
  "/upload-file",
  multer.single("file"),
  async (req, res, next) => {
    console.log(req.file);
    try {
      if (!req.file) {
        res.status(400).send("No file uploaded.");
        return;
      }
      const auth = authenticateGoogle();
      const response = await uploadFileOnDrive(req.file, auth);

      res.status(200).json({ response });
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = classRouter;

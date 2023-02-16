const express = require("express");
const userController = require("../controller/userController");
const userRouter = express.Router();

userRouter
  .route("/")
  .get(userController.getAllUser)
  .post(userController.postUser);

module.exports = userRouter;

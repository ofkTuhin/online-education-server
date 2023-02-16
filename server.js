// import function
const express = require("express");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const { dbConnect } = require("./dbConnect");
const { errorHandler } = require("./errorHandler");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./router/adminRouter");
const teacherRouter = require("./router/teacherRouter");
const studentRouter = require("./router/studentRouter");

// set port
const port = process.env.PORT;

// get index file
app.get("/", (req, res) => {
  res.send("Hello World!");
  res.end();
});

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// database connection
dbConnect();

// error handler
app.use(errorHandler);

// router setup
app.use("/api/admin", adminRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/student", studentRouter);

// local server port
app.listen(port);
app.listen(() => {
  console.log(`server run on port http://localhost:${port}`);
});

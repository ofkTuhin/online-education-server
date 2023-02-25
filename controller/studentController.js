const { checkExists } = require("../lib/utils");
const { Student } = require("../model/studentModel");

// get Student
module.exports.getAllStudent = async (req, res) => {
  const { user } = req.headers;
  const response = (res, err, data) => {
    if (err) {
      res.status(500).json({
        error: "the server side error",
      });
    } else {
      res.status(200).json({
        result: data,
        message: "data get succesfully",
      });
    }
  };
  await Student.find({ email: user }).exec((err, data) => {
    response(res, err, data);
  });
  console.log("success");
};

// post Student
module.exports.postStudent = async (req, res) => {
  console.log(req.body);
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(401).json({
      success: false,
      error: "data are missing",
    });
  }
  const studentData = {
    ...req.body,
    role: "student",
  };

  if (checkExists(req, Student)) {
    res.status(409).json({
      success: false,
      message: "This email already exists",
    });
  } else {
    const postData = new Student(studentData);

    postData.save(studentData, (error) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          error: "There is server side error",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "data added sucessfully",
        });
      }
    });
  }
};

const { checkExists } = require("../lib/utils");
const { Teacher } = require("../model/teacherModel");

// get Teacher
module.exports.getAllTeacher = async (req, res) => {
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
  await Teacher.find({ email: user }).exec((err, data) => {
    response(res, err, data);
  });
  console.log("success");
};

// post Teacher
module.exports.postTeacher = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(401).json({
      success: false,
      error: "data are missing",
    });
  }
  const teacherData = {
    ...req.body,
    role: "teacher",
  };
  const isUser = await checkExists(req, Teacher);
  if (isUser.length > 0) {
    res.status(409).json({
      success: false,
      message: "This email already exists",
    });
  } else {
    const postData = new Teacher(teacherData);
    postData.save(teacherData, (error) => {
      if (error) {
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

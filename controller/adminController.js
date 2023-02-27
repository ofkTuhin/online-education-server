const { checkExists } = require("../lib/utils");
const { Admin } = require("../model/adminModel");
// get Admin
module.exports.getAllAdmin = async (req, res) => {
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
  await Admin.find({}).exec((err, data) => {
    response(res, err, data);
  });
};

// post Admin
module.exports.postAdmin = async (req, res) => {
  if (!req.body.name || !req.body.email) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }
  const adminData = {
    ...req.body,
    role: "admin",
  };
  const isAdmin = await checkExists(req, Admin);
  if (isAdmin.length > 0) {
    res.status(409).json({
      success: false,
      message: "This email already exists",
    });
  } else {
    const postData = new Admin(adminData);
    postData.save(adminData, (error) => {
      if (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error: "There is server side error",
        });
      } else {
        res.status(200).send({
          success: true,
          message: "data added sucessfully",
        });
      }
    });
  }
};

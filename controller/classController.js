const { Class } = require("../model/classModel");

// get class
module.exports.getAllClass = (req, res) => {
  console.log("success");
  res.send("get successfully");
};

// post class
module.exports.postClass = async (req, res) => {
  if (!req.body.class || !req.body.teacher) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }
  console.log(req.body);
  try {
    const postData = new Class(req.body);

    await postData.save();
    res.status(200).send({
      success: true,
      message: "data added sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: "There is server side error",
    });
  }
};

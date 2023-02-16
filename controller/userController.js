const { User } = require("../model/userModel");

// get user
module.exports.getAllUser = (req, res) => {
  console.log("success");
  res.send("get successfully");
};

// post user
module.exports.postUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.age) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }
  console.log(req.body);
  const postData = new User(req.body);
  postData.save(req.body, (error) => {
    if (error) {
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
};

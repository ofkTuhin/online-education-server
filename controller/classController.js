const { Class } = require("../model/classModel");

// get class
module.exports.getAllClass = async (req, res) => {
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
  await Class.find({}).exec((err, data) => {
    response(res, err, data);
  });
};
// const getSingle class
module.exports.getSingleClass = async (req, res) => {
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
  await Class.find({ _id: req.params.id }).exec((err, data) => {
    response(res, err, data);
  });
};

// idividual teacher class
module.exports.getClassByTeacher = async (req, res) => {
  const response = (res, err, data) => {
    if (err) {
      console.log(err);
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

  await Class.find({ teacher: req.params.email }).exec((err, data) => {
    console.log(data);
    response(res, err, data);
  });
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

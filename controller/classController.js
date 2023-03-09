const { Class } = require("../model/classModel");
const stream = require("stream");
const express = require("express");

const path = require("path");
const { google } = require("googleapis");

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
  const KEYFILEPATH = path.join(__dirname, "../credential.json");
  const SCOPES = ["https://www.googleapis.com/auth/drive"];

  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
  });

  //

  if (!req.body.class || !req.body.teacher) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }

  const uploadFile = async (fileObject) => {
    const bufferStream = new stream.PassThrough();
    bufferStream.end(fileObject.buffer);
    const { data } = await google.drive({ version: "v3", auth }).files.create({
      media: {
        mimeType: fileObject.mimeType,
        body: bufferStream,
      },
      requestBody: {
        name: fileObject.originalname,
        parents: ["1slVHYVqhgz5iCzoJn-nOm0Fsb33NdZIc"],
      },
      fields: "id,name",
    });
    console.log(`Uploaded file ${data.name} ${data.id}`);
  };

  try {
    const { body, file } = req;
    console.log(body.file);

    await uploadFile(body.file);

    res.status(200).json({
      message: "upload file",
    });
  } catch (f) {
    res.send(f.message);
  }

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

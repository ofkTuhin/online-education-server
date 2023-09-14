const { checkExists } = require("../lib/utils");
const { Product } = require("../model/productModel");
// get Product
module.exports.getAllProduct = async (req, res) => {
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
  await Product.find({}).exec((err, data) => {
    response(res, err, data);
  });
};

// post Product
module.exports.postProduct = async (req, res) => {
  if (!req.body.name || !req.body.email) {
    res.status(401).send({
      success: false,
      error: "data are missing",
    });
  }
  const 
  ctData = {
    ...req.body,
    role: "product",
  };
  const isProduct = await checkExists(req, Product);
  if (isProduct.length > 0) {
    res.status(409).json({
      success: false,
      message: "This email already exists",
    });
  } else {
    const postData = new Product(productData);
    postData.save(productData, (error) => {
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

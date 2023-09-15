const { response } = require("express");
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

// update coments
module.exports.updateComment=async (req,res)=>{
  const id=req.params.id
 
 const update= await Product.updateOne({_id:id},{
    $push:{
      comments:req.body.data
    }
  },{new:true})
  res.status(200)
 console.log(update)
}

// get 
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

module.exports.getSingleProduct=async(req,res)=>{
  const id=req.params.id
  const result= await Product.findOne({_id:id}).lean()
  res.status(200).json({
    success:true,
    result:result
  })
}

module.exports.getComment=async(req,res)=>{
  const id=req.params.id
  const result= await Product.findOne({_id:id},{comments:1}).lean()
  console.log(result)
  res.status(200).json({
    success:true,
    result:result
  })
}

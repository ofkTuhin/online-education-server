const maongoose = require("mongoose");

module.exports.productSchema = maongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },

  rating: {
    type: Number,
  },
  price: {
    type: Number,
    require: true,
  },
  features:{
    type:[String]
  },
  comments:{
    type:[String]
  },
  status:{
    type:Boolean
  }

});

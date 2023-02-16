const maongoose = require("mongoose");

module.exports.adminSchema = maongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },

  role: {
    type: String,
  },
  password: {
    type: Number,
    require: true,
  },
});

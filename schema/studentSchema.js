const maongoose = require("mongoose");

module.exports.studentSchema = maongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  class: {
    type: String,
    require: true,
  },
  role: {
    type: String,
  },
  group: {
    type: String,
  },
});

const maongoose = require("mongoose");

module.exports.teacherSchema = maongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  role: {
    type: String,
  },
  subject: {
    type: String,
    require: true,
  },
});

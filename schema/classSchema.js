const maongoose = require("mongoose");

module.exports.classSchema = maongoose.Schema({
  teacher: {
    type: String,
    require: true,
  },
  class: {
    type: String,
    require: true,
  },

  group: {
    type: String,
  },
  subject: {
    type: String,
    require: true,
  },
  topics: {
    type: String,
    require: true,
  },
  lecture: {
    type: String,
  },
  // lecture_pdf: {
  //   type: File,
  // },
  date: {
    type: Date,
    default: Date.now(),
  },
});

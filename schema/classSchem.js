const { default: mongoose } = require("mongoose");
const maongoose = require("mongoose");

module.exports.classSchema = maongoose.Schema({
  teacher: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  subject: {
    type: String,
    require: true,
  },
  topics: {
    type: String,
    require: true,
  },
  class: {
    type: Number,
    require: true,
  },

  group: {
    type: String,
  },
  lecture: {
    type: String,
  },
  lecture_pdf: {
    type: File,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

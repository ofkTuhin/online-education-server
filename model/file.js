const { Schema, model } = require("mongoose");

const fileSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  file: {
    type: String,
    require: true,
  },
});
module.exports.File = new model("File", fileSchema);

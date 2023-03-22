const { Schema, model } = require("mongoose");

const fileSchema = Schema({
  file: {
    type: String,
    require: true,
  },
});
module.exports.File = new model("File", fileSchema);

const Multer = require("multer");

module.exports.multer = Multer({
  storage: Multer.memoryStorage(), // change this into memoryStorage from diskStorage
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

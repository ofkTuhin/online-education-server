const { google } = require("googleapis");
const fs = require("fs");
module.exports.authenticateGoogle = () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: `${__dirname}/../credential.json`,
    scopes: "https://www.googleapis.com/auth/drive",
  });
  return auth;
};

module.exports.uploadFileOnDrive = async (file, auth) => {
  const fileMetadata = {
    name: file.originalname,
    parents: ["1g8hOppt70jraBQ7D2mvFUBrxc0Q58fqG"], // Change it according to your desired parent folder id
  };
  console.log(file.mimeType);
  const media = {
    mimeType: file.mimetype,
    // body: fs.createReadStream(file.path),
  };

  const driveService = google.drive({ version: "v3", auth });

  const response = await driveService.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: "id",
  });
  return response;
};

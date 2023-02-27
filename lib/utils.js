module.exports.checkExists = async (req, Model) => {
  return await Model.find({ email: req.body.email });
};

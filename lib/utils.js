module.exports.checkExists = async (req, Model) => {
  return await Model.exists({ email: req.body.email });
};

const User = require('./user.model');


module.exports.list = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

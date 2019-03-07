const Category = require('./category.model');

module.exports.create = async (req, res) => {
	const category = new Category(req.body);
  	await category.save();
  	res.json(category);

};
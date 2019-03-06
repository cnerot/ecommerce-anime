const Panier = require('./panier.model');


module.exports.	create =  async (req, res) => {
	console.log("ok");
	const panier = new Panier(Object.assign({current:true}, req.body));
  	await panier.save();
  	res.json(panier);
};
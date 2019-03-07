const Product = require('./product.model');

module.exports.create = async (req, res) => {
	const product = new Product(req.body);

	//check name not null

	//check category exists

	//check price > 0

  	await product.save();
  	res.json(product);

};


module.exports.addToCart = async (req, res) => {
	const product = await Product.findById(req.params.id);
  	const Panier = require('../panier/panier.model')
  	Panier.findOne({ user: req.user._id, current: true}, function(err, result) {
        var panier;
        if (result === null){
        	panier = new Panier({
        		user:req.user.id,
        		current: true
            });
        } else {
            panier = result;
        }
        var add_product_to_cart = true;
        for (i = 0; i < panier.products.length; i++) { 
			if (panier.products[i].id == product._id){
				add_product_to_cart = false;
				panier.products[i].qty += 1;
			}
		}
        if (add_product_to_cart){
        	panier.products.push({id:product._id, qty:1});
        }
  		panier.save();
  		res.json(panier);
    });
};

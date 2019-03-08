const Product = require('./product.model');

module.exports.create = async (req, res) => {
	const product = new Product(req.body);
	
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
        	
        if (escape(panier.products[i].product._id) == escape(product._id)){
				add_product_to_cart = false;
				panier.products[i].qty += 1;
			}
		}
        if (add_product_to_cart){

        	panier.products.push({product:product, qty:1});
        }
  		panier.save();
  		res.json(panier);
    });
};


module.exports.removeFromCart = async (req, res) => {
  	const Panier = require('../panier/panier.model')
  	Panier.findOne({ user: req.user._id, current: true}, function(err, result) {
        if (result === null){
          throw Error('Panier is empty');
        } else {
			var product_missing = true;
	        for (i = 0; i < result.products.length; i++) {
        		if (escape(result.products[i].product._id) == escape(req.params.id)){
					result.products.splice(i, 1);
					product_missing = false;
				}
			}
			if (product_missing){
				throw Error('Product is not in Panier');
			} else {
  				result.save();
	  			res.json(result);
			}
        }
        
    });
};

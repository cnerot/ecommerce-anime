const Product = require('./product.model');


module.exports.addToCart= async (req, res) => {
			const product = await Product.findById(req.params.id);
  			const Panier = require('../panier/panier.model')
  			Panier.findOne({ _id : req.params.id, current: true}, function(err, result) {
            	result.product.append(product._id);
  				result.save();
  				res.json(result);
        	});
		},
	}
}


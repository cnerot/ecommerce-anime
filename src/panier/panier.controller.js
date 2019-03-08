const Panier = require('./panier.model');

module.exports.validate = (req, res)=>{
    const panier = Panier.findOne({ user : req.user._id, current: true},function(err, result) {
    	if(result != null){
    		result.current = false;
   			result.save();
    		res.json(result);
    	} else {
          throw Error('Panier not found');
    	}
   	})
};


module.exports.view = async (req, res) => {
  	Panier.findOne({ user: req.user._id, current: true}, function(err, result) {
		var panier;
		if (result == null){
			panier = new Panier({
     			user:req.user.id,
       			current: true
           	});
		}else {
			panier = result;
		}
		panier.save();
		res.json(panier);
	});
};



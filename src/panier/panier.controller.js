const Panier = require('./panier.model');

module.exports.validate = (req, res)=>{
    const panier = Panier.findOne({ _id : req.params.id, current: true},function(err, result) {
    	if(result != null){
    		result.current = false;
   			result.save();
    		res.json(result);
    	} else {
          throw Error('Panier not found');
    	}
   	})
};



const Panier = require('./panier.model');

module.exports.create = async (req, res) => {
	const panier = new Panier(Object.assign({current:true}, req.body));
	await panier.save();
	res.json(panier);
};
module.exports.validate = (req, res)=>{
    const panier = Panier.findOne({ _id : req.params.id, current: true},function(err, result) {

    	if(result != null){
    		result.current = false;
   			result.save();
    		res.json(result);
    	} else {
    		res.json(result);
    	}
   	})
   

};



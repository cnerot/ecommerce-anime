const User = require('./user.model');


module.exports.create = async (req, res) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(String(req.body.email).toLowerCase())){
          throw Error('Invalid email');
    }
  	const users = await User.findOne({
  		email: req.body.email
  	}, function(err, result){
  		if (result == null){
			const user = new User(req.body);
  			user.save();
  			res.json(user);
  		} else {
          	throw Error('Email already in use');
  		}
  	});

};

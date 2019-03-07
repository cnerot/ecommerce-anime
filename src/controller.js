module.exports.controller = (model_path) => {
	const Model = require(model_path);
	return {
    adminCheck: async (req, res, next) => {
        const User = require('./user/user.model')
        User.findOne({ email : req.user.email}, function(err, result) {
          if (result === null || result.role !== "Admin") {
            throw Error('Must Be Admin');
          }
        });
        next();
    },

    userCheck: async (req, res, next) => {
        const User = require('./user/user.model')
        User.findOne({ email : req.user.email}, function(err, result) {
          if (result === null) {
            throw Error('Must Be Connected');
          }
        });
        next();
    },
    check: async (req, res, next) => {
        const model = await Model.findById(req.params.id);
        if (!model) {
          throw Error('Model not found');
        }
        next();
    },
		create: async (req, res) => {
		  const model = new Model(req.body);
  		  await model.save();
  		  res.json(model);
  		},

		remove: async (req, res) => {
  			await Model.findByIdAndRemove(req.params.id);
  			res.json(req.params.id);
		},

		list: async (req, res) => {
  			const models = await Model.find();
  			res.json(models);
		},
		update: async (req, res) => {
  			const model = await Model.findOneAndUpdate({ _id: req.params.id }, req.body, {
  				new: true
  			}).exec();
 			res.json(model);
 		},
		view: async (req, res) => {
  			const model = await Model.findById(req.params.id);
  			res.json(model);
		}
	}
}


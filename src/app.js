//load Dependencies
const bodyParser = require('body-parser');
const cors = require('@robertoachar/express-cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const User = require('./user/user.model');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');



//init error pages
const { catchAll, notFound } = require('./error');
//load Express
const app = express();

//load entity routers (remember to load model in index.js)
const Router = {
	"user": {
		prefixe:'/api/users',
		router: require('./user/user.router')
	},
	"product": {
            prefixe:'/api/product',
            router: require('./product/product.router')
        },
    "panier": {
        prefixe:'/api/panier',
        router: require('./panier/panier.router')
    },
    "category": {
        prefixe:'/api/category',
        router: require('./category/category.router')
    }
};




//prepare cross origin security options
var whitelist = ['http://localhost:3001']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// Add security headers (hooray for helmet ^^)
app.use(helmet()); 
// Load CORS
app.use(cors(corsOptions));

//enable logging in console
app.use(morgan('tiny'));

//Parse http requests (makes it a whole lot easier to get data)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//handle auth


const jwtMW = exjwt({
    secret: 'lolmdr',
    credentialsRequired :false,
});


//load sub routes
app.use(Router.user.prefixe,jwtMW, Router.user.router);
app.use(Router.product.prefixe,jwtMW, Router.product.router);
app.use(Router.panier.prefixe,jwtMW, Router.panier.router);
app.use(Router.category.prefixe,jwtMW, Router.category.router);
// passport
app.use(passport.initialize());




require('./user/passport')(passport);


// Enregistrement
app.post('/register', function(req, res) {
	console.log(req.body)
    if(!req.body.email || !req.body.password) {
        res.json({ success: false, message: 'Please enter email and password.' });
    } else {
        var newUser = new User({
            email: req.body.email,
            password: req.body.password
        });

        //  Création de l'utilisateur
        newUser.save(function(err) {
            if (err) {
                return res.json({ success: false, message: 'Email déja utilisé'});
            }
            res.json({ success: true, message: 'Créé ! ' });
        });
    }
});


app.post('/authenticate', function(req, res) {

    // find the user
    User.findOne({
        email: req.body.email
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else {
            user.comparePassword(req.body.password,(err, isMatch)=>{
                if (isMatch){
                    // if user is found and password is right
                        // create a token with only our given payload
                        // we don't want to pass in the entire user since that has the password
                        const payload = {
                            email: user.email     };
                        var token = jwt.sign(payload, "lolmdr", {
                            expiresIn : 60*60*24 // expires in 24 hours
                        });

                        // return the information including token as JSON
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                } else {
                    res.json({ msg: "auth incorect" });

                }

            });

        }

    });
});


//build doc for default route
routes = {
	default: {
		route: "/",
		methods: ["get"],
	}
};
for (var key in Router) {
	if (Router.hasOwnProperty(key)) {
		var route = [];
		for (var e in Router[key].router.stack){
			route.push({
				route: Router[key].prefixe + Router[key].router.stack[e].route.path,
				methods: Object.getOwnPropertyNames(Router[key].router.stack[e].route.methods),
			});
		}
		routes[key] = route;
    }
}

//Default route
app.get('/', (req, res) => {
    res.json({ routes: routes });
});
app.use(notFound);
app.use(catchAll);


module.exports = app;

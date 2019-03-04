//load Dependencies
const bodyParser = require('body-parser');
const cors = require('@robertoachar/express-cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

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

    }
;


//prepare cross origin security options
var whitelist = ['http://example1.com', 'http://example2.com']
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



//load sub routes
app.use(Router.user.prefixe, Router.user.router);
app.use(Router.product.prefixe, Router.product.router);
app.use(Router.panier.prefixe, Router.panier.router);
app.use(Router.category.prefixe, Router.category.router);

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

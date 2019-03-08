import React, { Component } from 'react';
import Home from  './App';
import Login from './containers/Login';
import Register from './containers/Register';
import NavBar from './containers/NavBar';
import ListeAnime from './containers/ListeAnime';
import AddProduct from './containers/AddProduct';
import Cart from './containers/Cart';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './history';

function GetRoutes () {
	return(
		<Router history={history}>
		  <div className="container_global"  >
		  <NavBar />
		    <Route exact path="/" component={Home}/>
		    <Route path="/login" component={Login}/>
		    <Route path="/register" component={Register}/>
		    <Route path="/components" component={Home}/>
			<Route path="/listeAnime" component={ListeAnime}/>
			<Route path="/addProduct" component={AddProduct}/>
			<Route path="/Panier" component={Cart}/>

		    
		  </div>
		</Router>
		);
}

export { GetRoutes };

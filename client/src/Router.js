import React, { Component } from 'react';
import Home from  './App';
import Login from './containers/Login';
import Register from './containers/Register';
import NavBar from './containers/NavBar';
import ListeAnime from './containers/ListeAnime';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function GetRoutes () {
	return(
		<Router>
		  <div className="container_global"  >
		  <NavBar />
		    <Route exact path="/" component={Home}/>
		    <Route path="/login" component={Login}/>
		    <Route path="/register" component={Register}/>
		    <Route path="/components" component={Home}/>
			<Route path="/listeAnime" component={ListeAnime}/>

		    
		  </div>
		</Router>
		);
}

export { GetRoutes };

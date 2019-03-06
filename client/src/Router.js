import React, { Component } from 'react';
import Home from  './App';
import Login from './containers/Login';
import NavBar from './containers/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function GetRoutes () {
	return(
		<Router>
		  <div>
		  <NavBar />
		    <Route exact path="/" component={Home}/>
		    <Route path="/login" component={Login}/>
		    <Route path="/components" component={Login}/>
		  </div>
		</Router>
		);
}

export { GetRoutes };

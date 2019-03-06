import React, { Component } from 'react';
import Home from  './App';
import Login from './containers/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function GetRoutes () {
	return(
		<Router>
		  <div>
		    <Route exact path="/" component={Home}/>
		    <Route path="/login" component={Login}/>
		  </div>
		</Router>
		);
}

export { GetRoutes };

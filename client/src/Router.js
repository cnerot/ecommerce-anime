import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './App';
// when location = { pathname: '/about' }
function Router() {
	return (
		<Switch>
		  <Route exact path="/" component={Home} />
		  <Route path="/about" component={Home} />
		  <Route path="/contact" component={Home} />
		  {/* when none of the above match, <NoMatch> will be rendered */}
		  <Route component={Home} />
		</Switch>
		);

}

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

import { GetRoutes } from './Router';
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import portalApp from './reducers/reducers';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(portalApp, applyMiddleware(thunk));
export {store};

ReactDOM.render(
  <Provider store={store}>

	<BrowserRouter>
		<GetRoutes />
	</BrowserRouter>
  </Provider>,
	 document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

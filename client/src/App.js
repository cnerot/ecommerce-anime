import React, { Component } from 'react';
// route
import { BrowserRouter } from "react-router-dom";

// element
import Header from './containers/Header';
import NavBar from './containers/NavBar';

import { connect } from 'react-redux';
import { tokenExistAction } from './actions/auth.actions';

class App extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount = () => {

    if(typeof(this.props.token == undefined)){
      var token = localStorage.getItem('token');
      if(token != undefined) {
        this.props.tokenExistAction(token);
      }
    }
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    data: {
      token: state.authData.token,
    }
  };
}


export default connect(mapStateToProps , {tokenExistAction})(App);
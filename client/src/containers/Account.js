import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// redux
import { inscriptionEtapeAction, loginEmailAction, loginPasswordAction, loginAction } from '../actions/auth.actions';
import { connect } from 'react-redux';

class Account extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="App container mt-5 pt-5">
        <h1>Nicolas</h1>  
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      email: state.authData.email_login_form,
      password: state.authData.password_login_form,
    }
  };
}


export default connect(mapStateToProps , {})(Account);
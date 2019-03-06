import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// redux
import { inscriptionEtapeAction, loginEmailAction, loginPasswordAction, loginAction } from '../actions/auth.actions';
import { connect } from 'react-redux';


class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: 'black !'
    }
  }

  handleTogle = () => {
    const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({theme: newTheme})
  }

  handleEmailChange = (e) => {
    this.props.loginEmailAction(e.target.value);
  }

  handlePasswordChange = (e) => {
    this.props.loginPasswordAction(e.target.value);
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.props.loginAction(this.props.data.email, this.props.data.password);
  }


  render() {
    return (
      <div className="App container mt-5 pt-5">
        <h4>Inscription</h4>  
           <Form className="container mt-5 pt-5">
              <FormGroup  row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                <Col sm={10}>
                  <Input onChange={this.handleEmailChange} type="email" value={this.props.data.email} name="email" id="exampleEmail" placeholder="with a placeholder" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>Password</Label>
                <Col sm={10}>
                  <Input onChange={this.handlePasswordChange}  value={this.props.data.password} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>Repeat password</Label>
                <Col sm={10}>
                  <Input onChange={this.handlePasswordChange}  value={this.props.data.password} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
              </FormGroup>
              <Button onClick={this.formSubmit}> Valider le formulaire </Button>
            </Form>
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


export default connect(mapStateToProps , {})(Register);
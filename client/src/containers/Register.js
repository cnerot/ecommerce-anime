import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// redux
import { inscriptionEtapeAction,inscriptionEmailAction, inscriptionAction, inscriptionPasswordAction, inscriptionCopiePasswordAction } from '../actions/auth.actions';
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
    this.props.inscriptionEmailAction(e.target.value);
  }

  handlePasswordChange = (e) => {
    this.props.inscriptionPasswordAction(e.target.value);
  }

  handlePasswordCopieChange = (e) => {
    this.props.inscriptionCopiePasswordAction(e.target.value);
  }

  formSubmit = (e) => {
    if(this.props.data.password !== this.props.data.copiePassword) {
      //this.setState({})
      return;
    }
    e.preventDefault();
    this.props.inscriptionAction(this.props.data.email, this.props.data.password);
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
                  <Input onChange={this.handlePasswordCopieChange}  value={this.props.data.copiePassword} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
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
      email: state.authData.email_inscription_form,
      password: state.authData.password_inscription_form,
      copiePassword: state.authData.passwordCopie_inscription_form,
    }
  };
}


export default connect(mapStateToProps , {inscriptionEmailAction, inscriptionAction, inscriptionPasswordAction, inscriptionCopiePasswordAction})(Register);
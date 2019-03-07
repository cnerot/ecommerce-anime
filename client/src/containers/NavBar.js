import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Alert } from 'reactstrap';
  import { inscriptionEtapeAction, removeAlert,  loginEmailAction, loginPasswordAction, loginAction, deconnexionActionDispatcher } from '../actions/auth.actions';
import { connect } from 'react-redux';

import { Link, NavLink } from 'react-router-dom'

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: 'black !'
    }

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

 toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleTogle = () => {
    const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({theme: newTheme})
  }

  disconnect = () => {
    //console.log('yaaaaa');
    this.props.deconnexionActionDispatcher();
  }

  getAlert = () => {
    if(this.props.data.alert_message != "") {
     this.props.removeAlert();
      return (
       <Alert color="info">
            {this.props.data.alert_message}
        </Alert>
        );
    }
    return;
  }

  getUserNav = () => {
    if(this.props.data.etape == 0) {
      return(
         <Nav className="ml-auto navContainer" navbar>
             <NavItem>
                <NavLink to="/listeAnime/">liste des animé</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Panier</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register">Inscription</NavLink>
              </NavItem>
           </Nav>
       
        );
    }else if(this.props.data.etape == 1) {
      return(
         <Nav className="ml-auto navContainer" navbar>
             <NavItem>
                <NavLink to="/listeAnime/">liste des animé</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Panier</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login">mon compte</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.disconnect}  to="/">deconnexion</NavLink>
              </NavItem>
           </Nav>

        );
    }
  }

  render() {

    console.log(this.props.data.etape);
    return (
      <div>
      {this.getAlert()}
        <Navbar color="light" light expand="md">
          <NavbarBrand to="/"><NavLink to="/">Vente d'animer</NavLink></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
           

              {this.getUserNav()}
             
           
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      etape:        state.authData.etape_auth,
      alert_message: state.authData.alert_message,
    }
  };
}


export default connect(mapStateToProps , {deconnexionActionDispatcher, removeAlert})(Login);
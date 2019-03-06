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
  DropdownItem } from 'reactstrap';

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

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand to="/"><NavLink to="/">Vente d'animer</NavLink></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Login;
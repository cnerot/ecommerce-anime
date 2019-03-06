import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
class Login extends Component {

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


  render() {
    return (
      <div className="App">
          coucou
      </div>
    );
  }
}

export default Login;
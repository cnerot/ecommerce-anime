import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButton from './components/ToggleButton';
import { BrowserRouter } from "react-router-dom";

class App extends Component {

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React !
          </a>
            <ToggleButton theme={this.state.theme} onClick={this.handleTogle}/>
        </header>
      </div>
    );
  }
}

export default App;

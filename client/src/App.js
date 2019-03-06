import React, { Component } from 'react';
//component
import logo from './logo.svg';
import './App.css';
import ToggleButton from './components/ToggleButton';
// route
import { BrowserRouter } from "react-router-dom";
// redux
import { inscriptionEtapeAction } from './actions/auth.actions';
import { connect } from 'react-redux';
class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      theme: 'black !!'
    }
  }

  componentWillMount() {
    console.log(this.props.data.etape);
  }

  handleTogle = () => {
    const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.props.inscriptionEtapeAction(this.props.data.etape + 1);
    this.setState({theme: newTheme})
  }


  render() {
    const num = this.props.data.etape;
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
            Learn React ! {num}
          </a>
            <ToggleButton theme={this.state.theme} onClick={this.handleTogle}/>
        </header>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    data: {
      etape: state.authData.etape_inscription,
    }
  };
}



export default connect(mapStateToProps, {inscriptionEtapeAction})(App);

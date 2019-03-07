import React, { Component } from 'react';
// route
import { BrowserRouter } from "react-router-dom";

// element
import Header from './Header';
import NavBar from './NavBar';

import { Spinner } from 'reactstrap';

class ListeAnime extends Component {

  constructor(props) {
    super(props);


  this.state = {
      spiner: true,
    }

  }

  componentWillMount() {
    
  }

  getSpinner = () => {
    if(this.state.spiner){
      return (<Spinner className="spinner" style={{ width: '10rem', height: '10rem' , color: 'grey'}} />)
    }
  }

  render() {
    return (
      <div>
        {this.getSpinner()}
      </div>
    );
  }
}

export default ListeAnime;

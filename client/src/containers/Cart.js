import React, { Component } from 'react';
// route
import { BrowserRouter } from "react-router-dom";

// element
import Header from './Header';
import NavBar from './NavBar';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Spinner } from 'reactstrap';
import { API_URL } from '../config'

class ListeAnime extends Component {

  constructor(props) {
    super(props);
  this.state = {
      spiner: true,
      items: [],
    }
  }

  componentWillMount() {

  
    fetch(API_URL+'/api/panier', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Host': API_URL
      }
    })
    .then(items => { 
    	console.log(items)
      if (items === null){
        items = [];
      }
      console.log(items);
      this.setState({ items : items })});

  }

  getSpinner = () => {
    if(this.state.spiner){
      return (<Spinner className="spinner" style={{ width: '10rem', height: '10rem' , color: 'grey'}} />)
    }
  }



  render() {
    const { items } = this.state;
    console.log(this.state.items);
    return (

      <div className="App container mt-5 pt-5">

<div class="container">
<div class="row">
      {this.state.items.map(item=>
 <div class="col-sm-4">       
  <Card  key={item.product.name}>
    <CardImg top width="100%" src="https://www.nautiljon.com/images/perso/00/17/vegeta_1771.jpg?1525613735" alt="Card image cap" />
      <CardBody>
        <CardTitle>{item.product.name || "no name"}</CardTitle>
        <CardSubtitle>{item.product.description || "no stoke"}</CardSubtitle>
        <CardText>{item.price || "no stoke"}</CardText>
        <Button >ajouter au pannier</Button>
      </CardBody>
    </Card>
    </div>
        )}
</div>
</div>
</div>
     // <div>
       // {this.getSpinner()}
     // </div>
    );
  }
}

export default ListeAnime;

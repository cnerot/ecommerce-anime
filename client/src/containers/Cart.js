import React, { Component } from 'react';
// route
//import { BrowserRouter as Router } from "react-router-dom";

// element
//import Header from './Header';
//import NavBar from './NavBar';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Spinner } from 'reactstrap';
import { API_URL } from '../config'

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
        spiner: true,
        items: {},
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
    .then(response => response.json())
    .then(items => {this.setState({ items: items }); console.log(items)});

  }

  getSpinner = () => {
    if(this.state.spiner){
      return (<Spinner className="spinner" style={{ width: '10rem', height: '10rem' , color: 'grey'}} />)
    }
  }



  render() {
    const { items } = this.state;
    console.log(items);
    //console.log('tortototo'+ items);
    return (

      <div className="App container mt-5 pt-5">

<div class="container">
<div class="row">
      {items.products && items.products.map( item=>
 <div class="col-sm-4">       
  <Card  key={item.product.name}>
    <CardImg top width="100%" src={item.product.urlImage || "testt"} alt="Card image cap" />
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

export default Cart;

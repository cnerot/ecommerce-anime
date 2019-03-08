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
    fetch(API_URL+'/api/product')
    .then(result=>result.json())
    .then(items => this.setState({ items : items }));
  }

  getSpinner = () => {
    if(this.state.spiner){
      return (<Spinner className="spinner" style={{ width: '10rem', height: '10rem' , color: 'grey'}} />)
    }
  }


  valider(arg){


    fetch(API_URL + '/api/product/addToCart/'+arg, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Host': API_URL
      }
    }).then(function(response) {
      console.log(response);
      return response.json();
    });


  }

  render() {
    const { items } = this.state;
    return (

      <div className="App container mt-5 pt-5">

<div class="container">
<div class="row">
      {this.state.items.map( item=>
 <div class="col-sm-4">       
  <Card  key={item.name}>
    <CardImg top width="100%" src="https://www.nautiljon.com/images/perso/00/17/vegeta_1771.jpg?1525613735" alt="Card image cap" />
      <CardBody>
        <CardTitle>{item.name || "no name"}</CardTitle>
        <CardSubtitle>{item.description || "no stoke"}</CardSubtitle>
        <CardText>{item.price || "no stoke"}</CardText>
        <Button onClick={() => this.valider(item._id )} >ajouter au pannier</Button>
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

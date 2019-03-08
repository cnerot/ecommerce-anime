import React, { Component } from 'react';
// route
import { BrowserRouter, Redirect } from "react-router-dom";

// element
import Header from './Header';
import NavBar from './NavBar';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Spinner } from 'reactstrap';
import { API_URL } from '../config'

class AdminAnime extends Component {

  constructor(props) {
    super(props);
  this.state = {
      spiner: true,
      items: [],
      redirect : false
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


    fetch(API_URL + '/api/product/'+arg, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Host': API_URL
      }
    }).then(result=>result.json())
    .then(() => this.setState({ redirect: true }));
   
  }

  render() {
    const { items } = this.state;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/listeAnime'/>;
    }
    return (

      <div className="App container mt-5 pt-5">

<div class="container">
<div class="row">
      {items.map( item=>
 <div class="col-sm-4">       
  <Card  key={item.name}>
    <CardImg top width="100%" src={item.urlImage || "https://i.redd.it/q7szpfctitj01.jpg"} alt="Card image cap" />
      <CardBody>
        <CardTitle>{item.name || "no name"}</CardTitle>
        <CardSubtitle>{item.description || "no description"}</CardSubtitle>
      <CardText>Price {item.price || "10.00"}$</CardText>
      <CardText>Stock: {item.quantity || "0"}</CardText>
        <Button onClick={() => this.valider(item._id )}>Supprimer</Button>
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

export default AdminAnime;

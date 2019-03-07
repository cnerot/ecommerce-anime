import React, { Component } from 'react';
// route
import { BrowserRouter } from "react-router-dom";

// element
import Header from './Header';
import NavBar from './NavBar';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Spinner } from 'reactstrap';

class ListeAnime extends Component {

  constructor(props) {

    super(props);

  this.state = {
      spiner: true,
      items: [],
    }

  }

  componentWillMount() {

    fetch(`http://0.0.0.0:3000/api/product`)
    .then(result=>result.json())
    .then(items => this.setState({ items : items }));
  }

  getSpinner = () => {
    if(this.state.spiner){
      return (<Spinner className="spinner" style={{ width: '10rem', height: '10rem' , color: 'grey'}} />)
    }
  }


  valider(arg){
    
console.log(arg);

  }

  render() {
    const { items } = this.state;
    return (



      <div className="App container mt-5 pt-5">

<div class="container">
<div class="row">
      {this.state.items.map( item=>
        
  <Card  key={item.name}>
    <CardImg top width="100%" src="https://www.nautiljon.com/images/perso/00/17/vegeta_1771.jpg?1525613735" alt="Card image cap" />
      <CardBody>
        <CardTitle>{item._id || "no name"}</CardTitle>
        <CardSubtitle>{item.price || "no stoke"}</CardSubtitle>
        <CardText>{item.description || "no stoke"}</CardText>
        <Button onClick={(item) => this.valider(item._id)} >ajouter au pannier</Button>
      </CardBody>
    </Card>
    
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

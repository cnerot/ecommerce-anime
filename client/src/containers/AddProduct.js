import React, { Component } from 'react';
// route
import { BrowserRouter, Redirect } from "react-router-dom";
// element
import Header from './Header';
import NavBar from './NavBar';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label,Col,
    Input, FormText  } from 'reactstrap';
import { API_URL } from '../config';

class AddProduct extends Component {

  constructor(props) {

    super(props);

    this.state = {
      redirect: true,
      spiner: true,
      items: [],
      name : this.props.name,
      description : this.props.description,
      prix : this.props.prix,
    }
  }

  componentWillMount() {

    
    //    fetch(`http://0.0.0.0:3000/api/product`)
    //  .then(result=>result.json())
    //.then(items => this.setState({ items : items }));
  }


  handleSubmit(event) {
    event.preventDefault();
      
    window.console.log('A name was submitted: ' + this.state.name);
    
      var data = {
        name: this.state.name,
        description: this.state.description,
        price: this.state.prix,
      };


      console.log(JSON.stringify(data));
    fetch(API_URL+'/api/product/', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Host': API_URL
      }
    }).then(function(response) {
      console.log(response); 
     
      BrowserRouter.push('/listeAnime');
    });

   
  
  }


  handlerChangeName(event){
    event.preventDefault();

    console.log(event.target.value);
    this.setState({name: event.target.value})

  }


  handlerChangeDescription(event){
    event.preventDefault();

    this.setState({description: event.target.value})

  }

  handlerChangePrix(event){
    event.preventDefault();

    this.setState({prix: event.target.value})

  }


  render() {
    return (
    <div className="App container mt-5 pt-5">
    <h4>Ajouter un manga</h4>  
       <Form className="container mt-5 pt-5">
          <FormGroup  row>
            <Label sm={2}>Nom</Label>
            <Col sm={4}>
              <Input type="text" onChange={this.handlerChangeName.bind(this)} value={this.state.name} id="name" placeholder="nom du produit" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Description</Label>
            <Col sm={4}>
              <Input type="text" onChange={this.handlerChangeDescription.bind(this)} value={this.state.description} name="description" placeholder="description" />
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label sm={2}>prix</Label>
            <Col sm={4}>
              <Input type="number" onChange={this.handlerChangePrix.bind(this)} value={this.state.prix} name="prixs" placeholder="euro" required/>
            </Col>
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)}  > Valider </Button>
        </Form>
  </div>
    );
  }
}

export default AddProduct;

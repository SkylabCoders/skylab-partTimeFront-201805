import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import BeerDetail from "../../BeerDetail/";
import './index.css';

class Beer extends Component{
  constructor(props){
    super(props);   
    
    this.state = {
      beer: null
    }


  }

  componentDidMount() {
    console.log("ComponentDidMount START")  // Los params van luego del signo de ? en la URL y se definien como Objeto
    axios.get(`https://api.punkapi.com/v2/beers/${this.props.beerID}`,{
      
      params: {
        beerID:this.props.beerID,
      }
    })
         
      .then(res => {
          const movie = res.data;
          console.log("Res: ", res)
          this.setState({ movie });
        })
        .catch(function (error) {    // ataja el error: no rompe la app
          // handle error
          console.log(error);
        })
  };

  render(){

    return (

      <div>
      
        <div className="BeerList">
            <div>
              <img src={this.props.image_url}/>
            </div>
          <div>
          
          </div>
          <div className="BeerInfo">
            <div>
              <h2>{this.props.name}</h2> 
              <h1>Beer id: {this.props.beerID}</h1>
            </div>
            <div>
            <h4>{this.props.tagline}</h4>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Beer;

import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class BeerDetail extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      beer: []
    }
    
  }

  componentDidMount() {
    console.log("ComponentDidMount START")

    axios.get(`https://api.punkapi.com/v2/beers/`,{
      
      params: {
        beerInfo:this.props.beerInfo,
      }

    })
    
      .then(res => {
        const beer = res.data[this.props.beerInfo-1];
        this.setState({ beer });
      })
      .catch(function (error) {    // ataja el error: no rompe la app
        // handle error
        console.log(error);
      })
      
  };   

  render(){

    console.log("Beer ID como prop", this.props.beerInfo);
    console.log('Beer del state: ', this.state.beer)
    return (

      <div>

        {this.state.beer === null ? <p>LOADING BEER DETAILS !</p> : 
        
          <div className="SingleBeer">

            <div className="Pic">
              <img src={this.state.beer.image_url}/>
            </div>

            <div className="BeerInfo">

              <h1>{this.props.beerID}</h1>
              <h1>{this.state.beer.name}</h1>
              <h3>{this.state.beer.tagline}</h3>
              <h5>{this.state.beer.description}</h5>

            </div>

          </div>
        
        }
        

      </div> 

    )
  }
}

export default BeerDetail;

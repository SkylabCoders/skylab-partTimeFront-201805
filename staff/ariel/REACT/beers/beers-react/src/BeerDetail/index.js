import React, { Component } from 'react';

import axios from 'axios';

class BeerDetail extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      beer: null
    }
    
  }


  componentDidMount() {
    console.log("ComponentDidMount START")
    axios.get(`https://api.punkapi.com/v2/beers/${this.props.beerId}`)
      .then(res => {
        const beer = res.data[0];
        this.setState({ beer });
      })
      .catch(function (error) {    // ataja el error: no rompe la app
        // handle error
        console.log(error);
      })
  };

  render(){
    return (

      <div className="SingleBeer">

        {this.state.beer === null ? <p>LOADING !</p> : 
        
          <div>
            <div className="pic">
              <img src={this.state.beer.image_url}/>
            </div>
            <div className="BeerInfo">
              <h2>{this.state.beer.name}</h2>
              <h4>{this.state.beer.tagline}</h4>
              <p>{this.state.beer.description}</p>
            </div>
          </div>
        
       
        }

      </div> 

    )
  }
}

export default BeerDetail;

import React, { Component } from 'react';
import Beer from './Beer/';
import axios from 'axios';


class BeerList extends Component {
  constructor(props){
    super(props);

    this.state = {
      beers: []
    }
    
  }

  componentDidMount() {
    console.log("ComponentDidMount START")
    axios.get(`https://api.punkapi.com/v2/beers`)
      .then(res => {
        const beers = res.data;
        this.setState({ beers });
      })
      .catch(function (error) {    // ataja el error: no rompe la app
        // handle error
        console.log(error);
      })
  };


  _renderBeers(){
    return this.state.beers.map((beer,i) => {
      return <Beer key={i} name={beer.name} image_url={beer.image_url} tagline={beer.tagline} />

    })
  } 

  render() {

    console.log("Render: ", this.state.beers.length)

    return (
      
      <div className="list">

        {this.state.beers.length === 0? <p>LOADING !</p> : this._renderBeers() }

      </div>

    )

       
      
  }
}


export default BeerList;

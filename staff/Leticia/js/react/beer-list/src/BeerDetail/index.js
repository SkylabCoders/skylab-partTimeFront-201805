import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class BeerDetail extends Component {

  constructor(props) {
      super(props);

      this.state = { 
        beer: null
    }
  }
  
  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers/${this.props.match.params.beerId}`)
      .then(res => {
        const beer = res.data[0];
        this.setState({ beer });
      })
      .catch(function (error) {
        alert("request error");
      })
  }

  render() {
    return (
      <div className="beer-detail">
        {this.state.beer === null ? <p> Loading </p> : 
          <div className="beer">
          <div className="beer-image" id={this.state.beer.id} style={{backgroundImage: `url(${this.state.beer.image_url})`}}></div>
          <div className="beer-info">
            <h1> {this.state.beer.name}</h1>
            <h2> {this.state.beer.tagline}</h2> 
          </div>
        </div> }
      </div>
    );
  }
}

export default BeerDetail;

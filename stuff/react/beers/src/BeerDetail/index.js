import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class BeerDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
     beer: null
    }
  }

  componentDidMount() {
      console.log("Route: ",this.props.match);
    axios.get(`https://api.punkapi.com/v2/beers/${this.props.match.params.b}`)
      .then(res => {
        if(res.status === 200 && res.data.length === 1){
          this.setState({beer : res.data[0]})  ;
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  _renderBeer(){
    const { beer } = this.state;

    return <div className="beer-detail">
                <div className="main-image"><img src={beer.image_url} /></div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>{beer.description}</p>
            </div>
  }

  render() {
    console.log(this.props.location)
    return (
        this.state.beer ? this._renderBeer() : <p>Loading</p>
        
    );
  }
}

export default BeerDetail;

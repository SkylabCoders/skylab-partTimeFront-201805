import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

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
      
      console.log(this.props.id)
    axios.get(`https://api.punkapi.com/v2/beers/${this.props.match.params.id}`)//pasar el 1 por props
      .then(res => {
        const beer = res.data[0];
        this.setState({ beer });
      })
      .catch(function (error) {
        // handle error - si falla
        console.log(error);
      })
  }

  render() {
    return (
     //poner name, tagline y foto
        <div className="detail">
         <p>this is beer detail</p>
        {
            this.state.beer === null ? 'Loading' :
        
           <div className="Beer" key={this.state.beer.id}>
                <img className='image' src= {this.state.beer.image_url} />
                    <div className='beers-info'>
                        <p className='name'>{this.state.beer.name}  </p>
                        <p className='tagline'> {this.state.beer.tagline}  </p>
                        <p className='description'> {this.state.beer.description}  </p>
                    </div>
                </div>
        }
        </div>

        
    
    );
  }
}

export default BeerDetail;

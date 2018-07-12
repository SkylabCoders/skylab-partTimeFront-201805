import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import Beer from '../BeerList/Beer';

import './index.css';

class SearchBeer extends Component {
  constructor(props){
    super(props);

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers/`,{
      params:{
        beer_name: this.props.match.params.searchString
      }
    })//pasar el 1 por props
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
      <div className="App" >
      <p>this is search beer</p>
      {
        this.state.beers.length > 0 ?
        this.state.beers.map((e)=>{
          return <div key={e.id} >< Link to= {`beer/${e.id}`} > 
                    <Beer 
                      name={e.name}
                      key={e.id} 
                      tagline={e.tagline} 
                      image={e.image_url}
                    />         
                  </Link></div> })  :
        <p>Loading</p>
      }
    </div>
    );
  }
}

export default SearchBeer;

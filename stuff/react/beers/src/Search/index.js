import React, { Component } from 'react';
import axios from 'axios';
import BeerList from '../BeerList';


class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
     beers: []
    }
  }

  componentDidMount() {
    console.log("componentDidMount START");
    axios.get(`https://api.punkapi.com/v2/beers`,{
      params: {
        beer_name: this.props.match.params.searchString
      }
    })
      .then(res => {
        console.log("componentDidMount RESPONSE");
        if(res.status === 200){
          this.setState({beers : res.data})  ;
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  render() {
    
    return (
      <BeerList beers={this.state.beers}/>
    );
  }
}

export default Search;

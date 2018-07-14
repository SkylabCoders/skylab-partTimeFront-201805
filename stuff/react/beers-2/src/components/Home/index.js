import React, { Component } from 'react';
import BeerList from '../BeerList';
import ApiService from '../../services/ApiService';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
     beers: []
    }
  }

  componentDidMount() {
    console.log("componentDidMount START");
    ApiService.getBeers(1).then((data) => {
      this.setState({beers: data});
    },(error) => {
      console.log('error: ', error);
    })
  }

  render() {
    
    return (
      <BeerList beers={this.state.beers}/>
    );
  }
}

export default Home;

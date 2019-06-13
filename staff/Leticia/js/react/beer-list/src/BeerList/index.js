import React, { Component } from 'react';
import axios from 'axios';

import './index.css';
import Beer from './Beer/';
import SearchForm from '../SearchForm/';

class BeerList extends Component {

  constructor(props) {
      super(props);

      this.state = { 
        beers      : [],
        searchValue: '',
        page       : null,
        per_page   : null
      }
  }
  
  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers`)
      
      .then(res => {
        const beers = res.data;
        this.setState({ beers });
      })

      .catch(function (error) {
        console.log(error);
      })
  }
  
  _renderBeers(){
    return this.state.beers.map((e,i) => {
      return <Beer key={i} id={e.id} name={e.name} image_url={e.image_url} tagline={e.tagline} />
    });
  }

  handleSubmit = (searchValue) => {
    axios.get(`https://api.punkapi.com/v2/beers/${this.props.match.params.searchValue}`)
      
      .then(res => {
        const beers = res.data;
        this.setState({ beers });
      })

      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      
      <div className="beer-list">
        <h1>My favourite beers</h1>
        
        <SearchForm onSubmit={this.handleSubmit} />
        
        {/* {console.log("location Beerlist", this.props.location.pathname)} */}
        {this.state.beers.length === 0 ? <p> Loading </p> : this._renderBeers()}
        
        <div className="">
            <form className="view-results" action="#">
              <select className="results-per-page form-control">
                  <option disabled selected>Show per page</option>
                  <option value="2">2</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
              </select>
            </form>

            <ul className="pagination">
              <li><a className="goToPage" data-page-number="1" href="">1</a></li>
              <li><a className="goToPage" data-page-number="2" href="">2</a></li>
              <li><a className="goToPage" data-page-number="3" href="">3</a></li>
            </ul>
            
        </div>

      </div>
    );
  }
}

export default BeerList;

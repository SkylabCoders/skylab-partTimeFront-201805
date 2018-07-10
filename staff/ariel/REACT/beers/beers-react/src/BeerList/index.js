import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


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
      return (

        <div className="BeerUnitInfo">

          <Link to={`/BeerDetail/${beer.id}`} key={i}>
            <div className="BeerPicture">
              <img src={beer.image_url}/>
            </div>
          </Link>


          <div className="BeerInfo">
            <div>
              <h2>{beer.name}</h2> 

            <h4>{beer.tagline}</h4>
            </div>
          </div>
        </div>
      )
    })
  } 

  render() {

   

    return (
      
      <div className="list">

        {this.state.beers.length === 0? <p>LOADING !</p> : this._renderBeers() }

      </div>

    )

       
      
  }
}


export default BeerList;

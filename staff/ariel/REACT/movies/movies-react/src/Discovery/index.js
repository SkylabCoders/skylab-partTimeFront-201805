import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Discovery extends Component {
  constructor(props){
    super(props)

    this.state = {
      movies: []
    }
  }

  
  componentDidMount() {
    console.log("ComponentDidMount START")
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1995c1a1d232dd178b70583c0f5a779b`)
      .then(res => {
        const movies = res.data.results;
        this.setState({ movies });
      })
      .catch(function (error) {    // ataja el error: no rompe la app
        // handle error
        console.log(error);
      })
  };

  _renderItems(){
    return this.state.movies.map((item,i) => {
      return (
      <Link to={`/item/${item.id}`} key={i}>
          <h1>{item.title}</h1> 
          <p>{item.overview}</p>
        </Link>
      )
    })
  } 

  render() {
  
      
    console.log("Render: ", this.state.movies.length)

    return (
      
      <div className="list">

        {this.state.movies.length === 0? <p>LOADING !</p> : this._renderItems() }

      </div>

    )

  }
}

export default Discovery;

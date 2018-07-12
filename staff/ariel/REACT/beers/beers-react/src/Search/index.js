import React, { Component } from 'react';
import { withRouter } from 'react-router';
import SearchList from './SearchList/';
import './index.css';

// source of info https://reactjs.org/docs/forms.html

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      beerName: ''
    };
    
    //this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // GREAT VIDEO ABOUT REACT FORMS https://www.youtube.com/watch?v=qH4pJISKeoI
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push(`/search-list/${this.state.beerName}`)
  }

  render() {
    return (
      <form >
        <label>

          <input type="text" 
            placeholder="search" 
            value={this.state.value} 
            onChange={e => this.setState({beerName: e.target.value})} />

        </label>
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}


export default withRouter(Search);

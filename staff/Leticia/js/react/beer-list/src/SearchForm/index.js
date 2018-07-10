import React, { Component } from 'react';
import './index.css';


class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {searchValue: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({searchValue: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state.searchValue); 
        this.setState({searchValue: ''})
        
        console.log(this.state.searchValue);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default SearchForm;
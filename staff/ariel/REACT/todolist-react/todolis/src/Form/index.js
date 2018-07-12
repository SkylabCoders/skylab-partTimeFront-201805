import React, { Component } from 'react';
import './index.css';



class Form extends Component {
  constructor(props){
    super(props)
    this.state ={
      todoTitle: 'a'
    }

    this.changeInputValue = this.changeInputValue.bind(this)
  }

    changeInputValue(e){
      this.setState({todoTitle: e.target.value})
    }

  render() {
    return (
      <div className="Form">
      <input
        onChange={this.changeInputValue}
        value={this.state.todoTitle}
      />
      </div>
    );
  }
}

export default Form;

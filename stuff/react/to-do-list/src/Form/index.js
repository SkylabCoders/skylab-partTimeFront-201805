import React, { Component } from 'react';
import './index.css';

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoTitle: ''
    }

    this.changeInputValue = this.changeInputValue.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  changeInputValue(e){
    this.setState({todoTitle: e.target.value})
  }

  addTodo(e){
    e.preventDefault();
    this.props.onAddTodo(this.state.todoTitle);
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.addTodo}>
          <input 
            onChange={this.changeInputValue}
            value={this.state.todoTitle}
            />
          <button type="submit">ADD TODO</button>
        </form>
      </div>
    );
  }
}

export default Form;

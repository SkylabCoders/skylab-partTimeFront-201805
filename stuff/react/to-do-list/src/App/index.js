import React, { Component } from 'react';
import './index.css';
import ToDoList from '../ToDoList/';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoId : 'dd'
    };

    this.changeTodoId = this.changeTodoId.bind(this);
  }

  changeTodoId(){
    this.setState({todoId: 'ff'});
  }

  render() {
    return (
      <div className="App">
        <p onClick={ this.changeTodoId }>App</p>
        <ToDoList todoId={this.state.todoId}/>
      </div>
    );
  }
}

export default App;

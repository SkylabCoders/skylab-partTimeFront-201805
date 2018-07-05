import React, { Component } from 'react';
import './index.css';
import ToDoList from '../ToDoList/';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>To do list</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;

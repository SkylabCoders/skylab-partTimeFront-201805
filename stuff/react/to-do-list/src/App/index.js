import React, { Component } from 'react';
import './index.css';
import ToDoList from '../ToDoList/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>App</p>
        <ToDoList />
      </div>
    );
  }
}

export default App;

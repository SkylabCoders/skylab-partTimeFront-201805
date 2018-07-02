import React, { Component } from 'react';

import './index.css';
/**
 * Poder añadir ToDos - hecho!!
Añadir Sass y estilos
 */

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoTitle: ''
    }
    this.changeInputValue = this.changeInputValue.bind(this)
    this.addItem = this.addItem.bind(this);
  }

  changeInputValue(e){
    //console.log(e.target.value)
    this.setState({todoTitle: e.target.value})
  }

  addItem(event) {
    console.log(this.state.todoTitle)
    this.props.onHandleSubmit(this.state.todoTitle)
    
    event.preventDefault();
    this.setState({todoTitle: ''})
  }

  /*
  asi se llama desde app
  onDeleteTodo = {this.deleteTodo}
  OnHandleSubmit = {this.addItem}
  
  asi esta la funcion en app
  deleteTodo(id){....
  //addItem(NewTitle,NewId){
    this.state.todos.push({id:NewId, title: NewTitle, done:false})
  }

  asi en toDo
  deleteTodo(){
    this.props.onDeleteTodo(this.props.id)
  }
  
  */

  render() {
    return (
      <div className="Form">
     
      <form onSubmit={this.addItem}>
        <input 
        placeholder="Enter text here..."
        onChange = {this.changeInputValue}
        value={this.state.todoTitle}/>
        <input className="formButton" type="submit" value="Add!" />
      </form>
      </div>
    );
  }
}

export default Form;
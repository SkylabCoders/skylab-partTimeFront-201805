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
    
    event.preventDefault();//para que no se recargue la pagina
    this.setState({todoTitle: ''})
  }

  /*
  asi se llama/mete a props desde todolist
  onDeleteTodo = {this.deleteTodo}
  
  asi esta la funcion en todolist
  deleteTodo(id){....
  
  asi la funcion va en toDo
  deleteTodo(){
    this.props.onDeleteTodo(this.props.id)
  }
  y se llama en el boton
  onClick={this.deleteTodo}
  
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
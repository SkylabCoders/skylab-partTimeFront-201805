import React, { Component } from 'react';

import './index.css';
import ToDo from './ToDo'
import Form from '../Form'

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state = {//this.state es un objeto
      todos: [
        {id:1, title: "To-Do 1", done: false},
        {id:2, title: "To-Do 2", done: true}
      ]//cada vez que vamos cambiando un todo se refresca todo
      //llaves para meter el codigo de javascript en react
      //cada vez que iteramos en un array, tenemos que tener un key para 
      //que pueda identificar que elemento es el que cambia

    }
    this.deleteTodo = this.deleteTodo.bind(this)
    this.setTodoStatus = this.setTodoStatus.bind(this)
    this.addItem = this.addItem.bind(this)

  }

  addItem(NewTitle){
    console.log('A name was submitted: ' + NewTitle);
    let NewId = this.state.todos.length+1
    let todos = this.state.todos
    todos.push({id:NewId, title: NewTitle, done:false})
    this.setState({todos})
    //console.log(this.state.todos.length)
  }

  setTodoStatus(id,status){
    
    let todos = this.state.todos
    for(let i=0;i<todos.length;i++){
      if(todos[i].id === id){
        todos[i].done = status;//aqui cambiamos el status con lo que nos manda ToDo
      }
    }
    
    //mandarla por prop al todo para que la llame desde alla con un id
    this.setState({todos})//le asignamos el valor de todos a todos, pero como tienen mismo nombre key y value se pone una sola vez

  }

  deleteTodo(id){
    console.log("Delete todo; ", id)
    //find id y borrar
    let deleting;
    let todos2 = this.state.todos
    todos2.forEach(function(element,i){
      if (element.id === id){
        deleting = i
      }
    })

    todos2.splice(deleting, 1);
    
    this.setState({todos:todos2})//le asignamos el valor de todos2 a todos

  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="ToDoList">
      <Form  onHandleSubmit = {this.addItem} />
        <p>Todolist</p>
        <ul>
        {this.state.todos.map((e)=>{
          return <ToDo key={e.id} id={e.id} title={e.title} done={e.done} onDeleteTodo = {this.deleteTodo} onSetStatus = {this.setTodoStatus}/>
        })}
        </ul>
        
      </div>
      
    );
    
  }
  
}

export default ToDoList;
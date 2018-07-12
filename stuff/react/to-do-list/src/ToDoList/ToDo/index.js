import React, { Component } from 'react';
import './index.css';

class ToDo extends Component {
  constructor(props){
    super(props);

    this.todoDone = this.todoDone.bind(this);
    this.todoUndone = this.todoUndone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  todoDone(){
    this.props.onSetTodoStatus(this.props.id, true);
  }

  todoUndone(){
    this.props.onSetTodoStatus(this.props.id, false);
  }

  deleteTodo(){
    this.props.onDeleteTodo(this.props.id);
  }

  componentWillUnmount(){
    console.log('TODO componentWillUnmount');
  }

  render() {
    const { title, id, done } = this.props;

    return (
      <li className="ToDo">
        <p>{id}. {title}--{done ? 'Hecho!' : 'Falta por hacer!'}</p>
        {
          done ?
          <button onClick={this.todoUndone} >Undone</button> :
          <button onClick={this.todoDone} >Done</button>
        }
        <button onClick={this.deleteTodo} >X</button>
      </li>
    );
  }
}

export default ToDo;

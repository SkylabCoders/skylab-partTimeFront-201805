import React, { Component } from 'react';
import './index.css';
import ToDo from './ToDo';
import Form from '../Form';

class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: [
                {id: 1, title: "To-Do 1", done: false},
                {id: 2, title: "To-Do 2", done: true}
            ]
        }

        this.deleteTodo = this.deleteTodo.bind(this);
        this.setTodoStatus = this.setTodoStatus.bind(this);
    }

    setTodoStatus(id, status){
        let todos = this.state.todos;

        for(let i=0 ; i<todos.length ; i++){
            if(todos[i].id === id){
                todos[i].done = status;
            }
        }
        this.setState({todos})
    }

    deleteTodo(id){
        let index = -1;
        let todos = this.state.todos;

        for(let i=0 ; i<todos.length ; i++){
            if(todos[i].id === id){
                index = i;
                break;
            }
        }

        todos.splice(index, 1);
        this.setState({todos})
    }

    render() {
        console.log(this.state.todos);
        return (
        <div className="ToDoList">
            <Form />
            <p>ToDoList</p>
            <ul>
                {this.state.todos.map((e) => {
                    return <ToDo 
                            key   = {e.id}
                            id    = {e.id}
                            title = {e.title}
                            done  = {e.done}
                            onDeleteTodo = {this.deleteTodo}
                            onSetTodoStatus = {this.setTodoStatus}
                            />
                })}
            </ul>
        </div>
        );
    }
}

export default ToDoList;

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
            ],
            recentlyAddedTodo: false
        }

        this.deleteTodo = this.deleteTodo.bind(this);
        this.setTodoStatus = this.setTodoStatus.bind(this);
        this.addTodo = this.addTodo.bind(this);

        console.log("constructor");
    }

    addNewRandomToDo(id, title){
        let todos = Object.assign(this.state.todos);
        todos.push({
            id:id,
            title: title,
            done: false
        });
        this.setState({todos});
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.addNewRandomToDo('-1','componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate");
        console.log("-- ",prevProps);
        console.log("-- ",prevState);
        console.log("-- ",snapshot);
        console.log("-- ",this.props);

        if(prevProps.todoId !== this.props.todoId){
            this.addNewRandomToDo('-2','componentDidUpdate');
        }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate');
    //     console.log(this.props, nextProps);
    //     console.log(this.state, nextState);

    //     if(this.props.todoId !== nextProps.todoId){
    //         return true;
    //     }
    //     return false;
    // }

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

    addTodo(title){
        let todos = Object.assign(this.state.todos);
        todos.push({
            id: todos.length > 0 ? todos[todos.length - 1].id + 1: 0, 
            title: title,
            done: false
        });
        this.setState({
            todos,
            recentlyAddedTodo: true
        });

        setTimeout(()=>{
            this.setState({recentlyAddedTodo : false});
        },5000);
    }

    render() {
        console.log("render");
        return (
        <div className="ToDoList">
            {this.state.todos.length < 5 ? 
                <Form onAddTodo={this.addTodo}/>  :
                <p>Ya no puedes añadir más todos</p>
            }
            {this.state.recentlyAddedTodo && <p>-TODO AÑADIDO CORRECTAMENTE-</p>}
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

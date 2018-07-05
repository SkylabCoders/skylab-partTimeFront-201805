import React, { Component } from 'react';
import './index.css';
import ToDo from './ToDo/';
import Form from '../Form/';

class Todolist extends Component {
    constructor(props) {
        super(props);

        this.state = { // interno
            todoTitle: ' ',
            todos: [
                //{ id: id, title: todoTitle, done: true }
            ],
            // para que se refresquen los items
            todo: {
                id: '',
                title: '',
                done: false
            }   
        }

        this.deleteToDo = this.deleteToDo.bind(this); // register "this"
        this.setToDoDone = this.setToDoDone.bind(this); // register "this"
        this.onAddToDoItem = this.onAddToDoItem.bind(this); // register "this"
    }

    // onAddToDoItem = (todoTitle) => {
    //     let todos2 = this.state.todos;

    //     todos2.forEach((e, i) => {
    //         todos2[i].id = i;
    //     });
        
    //     this.setState({todos: todos2});
    // }

    onAddToDoItem = (todoTitle) => {
        let todos = this.state.todos;
        let todos2 = this.state.todos;
        let todo = {};

        // todo: { 
        //     id: todos2.length + 1,
        //     title: todoTitle,
        //     done: false
        // };
        
        todos2.forEach((e, i) => {
            todos2[i].id = i;
        });
        
        todos2: todos2.push(todo);

        this.setState({todos, todos2});        

        console.log(todo);
    }

    setToDoDone(id, status) {
        // console.log(id, status);
        let todos2 = this.state.todos;

        todos2.forEach((e, i) => {
            if(e.id === id){
                todos2[i].done = status;
            }
        });
        
        this.setState({todos: todos2});
    }

    deleteToDo(id) {
        let todos2 = this.state.todos;

        todos2.forEach((e, i) => {
            if(e.id === id){
                todos2.splice(i,1);
            }
        });

        this.setState({todos: todos2});
    }

    render() {
        return (
        <div className="App">
            
            <Form onSubmit={this.addToDoItem} />
            
            <ul className="to-do-list">
                {this.state.todos.map((e) => { // retorna todos los todos
                    return <ToDo 
                        key={e.id} // props lo que nos mandan a través de atributos
                        id={e.id}
                        title={e.title}
                        done={e.done}
                        onDeleteToDo={this.deleteToDo} // pasamos la funcion
                        setStatus={this.setToDoDone} // pasamos la funcion
                        /> // e.id -> enlaza elemento del DOM con el elemento del array
                })}
                {/* {this.state.todos.map((e, i) => <li key={i}>{e.title}</li>)} */}
            </ul>

        </div>
        );
    }
}

export default Todolist;

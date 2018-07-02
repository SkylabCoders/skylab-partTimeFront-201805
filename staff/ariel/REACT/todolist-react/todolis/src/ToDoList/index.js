import React, { Component } from 'react';
import './index.css';
import ToDo from './ToDo/'
import Form from '../Form/'


class ToDoList extends Component {

    constructor(props){

        super(props);
        this.state = {
            todos: [
                {id: 1, title: "To-Do 1", done: false},
                {id: 2, title: "To-Do 2", done: true} 
            ]
        };

        this.deleteToDo = this.deleteToDo.bind(this);
        this.setTodoStatus = this.setTodoStatus.bind(this);


    };

    setTodoStatus(id, status){
        //console.log('delete TODO: ', id);
        //console.log('status: ', status);
        let todos2 = this.state.todos;

        todos2.forEach((e,i)=>{
            if(e.id === id){
                indice = i; //this.state.todos.indexOf(e);
                todos2[i].done = status
            }
        })

        
        this.setState({todo: todos2});

    };


    deleteToDo(id){
        console.log('delete TODO: ', id);
        let indice;
        let todos2 = this.state.todos;

        todos2.forEach((e,i)=>{
            if(e.id === id){
                indice = i; //this.state.todos.indexOf(e);
            }
        })

        console.log('indice: ',indice)

        todos2.splice(indice,1)

        this.setState({todos: todos2})
    };

  render() {
    return (

      <div className="ToDoList">
            <Form />
            <ul>ToDoList</ul>
            
            {this.state.todos.map((e) => {

                return <ToDo 
                    key={e.id} // el key enlaza éste elemento del DOM con éste elemento del array, identificar cuál ha cambiado
                    id={e.id}   // paso cada prop por separado para tener mayor control y claridad
                    title={e.title} 
                    done={e.done}
                    onDeleteTodo = {this.deleteToDo}
                    onSetStatus = {this.setTodoStatus}
                /> 

            })}
      </div>

    );
  }
}

export default ToDoList;

import React, { Component } from 'react';
import './index.css';


class ToDo extends Component {
  constructor(props){
    super(props)

    this.state = {
      done: props.done
    }

    this.todoDone = this.todoDone.bind(this);
    this.todoUnDone = this.todoUnDone.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.setTodoStatus = this.setTodoStatus.bind(this);

  }

  todoDone(){
    this.props.onSetStatus(this.props.id, true)
  }

  todoUnDone(){
    this.props.onSetStatus(this.props.id, false)
  }

  deleteToDo(){
    this.props.onDeleteTodo(this.props.id)
  }


  render() {

    // const {title} = this.props;
    // const {done} = this.state;   ---> de ésta manera logro código más limpio (ver coments abajo)
    return (

      <li className="ToDo" >

       <p>{this.props.id} {this.props.title} -- {this.props.done? 'Hecho':'Falta por hacer'}</p>

       {
         this.props.done ?
         <button onClick={this.todoUnDone} >UnDone</button>
         :
         <button onClick={this.todoDone}>Done</button>
       }

       <button onClick={this.deleteToDo}>X</button>

       </li> 
      
      // <li>
      // <p>{title} -- {done? 'Hecho':'Falta por hacer'}</p>
      // <button onClick={this.todoDone}>Done</button>
      // </li> 


      

    );
  }

}

export default ToDo;

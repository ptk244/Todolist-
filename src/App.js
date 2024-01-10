import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor(props) {
    super(props);
    
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  // create handleAdd and handleRemove functions here

  handleAdd=(text)=>{
    this.setState({
      todos:[{text}, ...this.state.todos]
    });
  }

  handleRemove=(text)=>{
    const filterTodos=this.state.todos.filter((todo)=>todo.text!==text)
    this.setState({
      todos:filterTodos
    });
  }



  render() {
    const {todos}=this.state;
    return (
      <div className="App">
        <span>Todo</span>
        <Form onAdd={this.handleAdd}/>
        <List onRemove={this.handleRemove} todoList={todos} />
      </div>
    );
  }
}

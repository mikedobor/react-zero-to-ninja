import React, { Component } from "react";
import TodoList from "../components/TodoList";
import "./todo.scss";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: "",
      error: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(res => {
        const todos = res.slice(0, 10);
        this.setState({
          items: [...this.state.items, ...todos]
        });
      });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
      error: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.text.trim().length === 0) {
      this.setState({
        error: true
      });
    } else {
      const newItem = {
        title: this.state.text,
        id: Date.now()
      };

      this.setState(prevState => ({
        items: [...prevState.items, newItem],
        text: ""
      }));
    }
  }

  removeItem(todo) {
    const todoItems = this.state.items.filter(item => item.id !== todo.id);

    this.setState({ items: todoItems });
  }

  render() {
    return (
      <div id="todo-container-wrapper">
        <form id="todo-form" onSubmit={this.handleSubmit}>
          <label htmlFor="todo" />
          <input
            id="todo"
            name="todo"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>Add Item</button>
        </form>
        {this.state.error && (
          <span className="error">Please enter a valid todo</span>
        )}
        {this.state.length > 0 && (
          <TodoList items={this.state.items} removeItem={this.removeItem} />
        )}
      </div>
    );
  }
}

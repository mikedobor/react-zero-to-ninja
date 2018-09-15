import React from 'react'

const TodoForm = props => (
  <form onSubmit={props.handleSubmit} id="todo-form">
    <label htmlFor="todo" />
    <input
      id="todo"
      name="title"
      placeholder="title"
      value={props.title}
      onChange={props.handleChange}
    />
    <label htmlFor="description" />
    <textarea
      id="todo"
      name="description"
      placeholder="description"
      value={props.description}
      onChange={props.handleChange}
    />
    <button>Add Item</button>
  </form>
)

export default TodoForm

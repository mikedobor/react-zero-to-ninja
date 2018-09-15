import React from 'react'
import './todolist.scss'

const TodoList = props => (
  <ul id="todo-list-wrapper">
    {props.todos.map(todo => (
      <li key={todo.id}>
        <span>{todo.title}</span>
        <p>{todo.description}</p>
        <button onClick={() => props.removeItem(todo)}>Remove</button>
      </li>
    ))}
  </ul>
)

export default TodoList

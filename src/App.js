import React, { Component } from "react";
import Todo from "./containers/Todo";

export default class App extends Component {
  render() {
    return (
      <div id="root-container">
        <h1 id="welcome-header">Welcome!</h1>
        <hr />
        <Todo />
      </div>
    );
  }
}

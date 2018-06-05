import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <li className="Todo">
       <strong>{this.props.todo.userId} {this.props.todo.id} {this.props.todo.title} : </strong> {this.props.todo.completed}
      </li>
    );
  }
}

export default TodoItem;

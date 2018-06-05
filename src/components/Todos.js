import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem  key={todo.id}  todo={todo} />
        );
      });
    }

    return (
      <div className="Todos">
        {todoItems}
      </div>
    );
  }
}

/*Projects.propTypes = {
  projects: React.propTypes.array,
  onDelete: React.propTypes.func
}*/

export default Todos;

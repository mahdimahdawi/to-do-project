import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            changeEvent={this.props.changeEvent}
            deleteItem={this.props.deleteItem}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;

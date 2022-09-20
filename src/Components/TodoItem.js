import React from "react";

function TodoItem(props) {
  return (
    <li>
      <input
        type={"checkbox"}
        checked={props.item.completed}
        onChange={() => props.changeEvent(props.item.id)}
      />
      {props.item.title}
      <button onClick={() => props.deleteItem(props.item.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;

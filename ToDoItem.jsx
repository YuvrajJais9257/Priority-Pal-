import React, { useState } from "react";

function ToDoItem(props) {
  const { task, onDelete } = props;
  const [isCompleted, setIsCompleted] = useState(false);

  function handleClick() {
    setIsCompleted(!isCompleted);
  }

  const customStyle = {
    textDecoration: isCompleted ? "line-through" : "none"
  };

  return (
    <li onClick={handleClick} style={customStyle}>
      {task} <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ToDoItem;

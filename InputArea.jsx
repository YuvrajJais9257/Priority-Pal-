import React from "react";
import ReactDOM from "react-dom";

function InputArea(props) {
  function setTask(event) {
    props.setName(event.target.value);
  }
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Task"
        name="task"
        value={props.name}
        onChange={setTask}
      />
      <button onClick={props.addTask}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

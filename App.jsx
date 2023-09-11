import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();
    if (name.trim() !== "") {
      setTasks([...tasks, name]);
      setName("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea name={name} setName={setName} addTask={addTask} />
      <div>
        <ol>
          {tasks.map((task, index) => (
            <ToDoItem
              key={index}
              task={task}
              onDelete={() => deleteTask(index)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;

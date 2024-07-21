import React, { useState } from "react";

function TodoList() {
  const [tasks, setTask] = useState(["Eat breakfast", "take shower"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1],updatedTasks[index]];
      setTask(updatedTasks);
    }
  }

  function moveTaskDown(index) {
     if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]];
      setTask(updatedTasks);
    }
  }

  return (
    <>
      <div className="todoList">
        <h1>To-Do-List</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a Task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="addBtn" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="deleteBtn" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="moveBtn" onClick={() => moveTaskUp(index)}>
                👆🏻
              </button>
              <button className="moveBtn" onClick={() => moveTaskDown(index)}>
                👇🏻
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default TodoList;

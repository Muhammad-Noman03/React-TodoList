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

        <div className="input-area">
          <input
            type="text"
            placeholder="Enter a Todo..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="addBtn" onClick={addTask}>
            Add
          </button>
        </div>

        <ol className="task-area">
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="deleteBtn" onClick={() => deleteTask(index)}>
                <i class="fa-solid fa-trash"></i>
              </button>
              <button className="moveBtn" onClick={() => moveTaskUp(index)}>
                <i class="fa-solid fa-up-long"></i>
              </button>
              <button className="moveBtn" onClick={() => moveTaskDown(index)}>
                <i class="fa-solid fa-down-long"></i>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default TodoList;


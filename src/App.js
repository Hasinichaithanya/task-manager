import React, { useState, useEffect, createContext } from "react";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import "./App.css";

export const TaskContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    console.log(savedTasks);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const editTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskContext.Provider>
  );
};

export default App;

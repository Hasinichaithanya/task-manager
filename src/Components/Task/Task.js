import React, { useContext, useState } from "react";
import { TaskContext } from "../../App";
import "./index.css";

const Task = ({ task }) => {
  const { editTask, deleteTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedPriority, setEditedPriority] = useState(task.priority);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  const handleCheckboxChange = () => {
    editTask({ ...task, completed: !task.completed });
    console.log(editTask);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTask({
      ...task,
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority,
      dueDate: editedDueDate,
    });
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
        id="checkBox"
      />
      <div className="task-details">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <select
              value={editedPriority}
              onChange={(e) => setEditedPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <input
              type="date"
              value={editedDueDate}
              onChange={(e) => setEditedDueDate(e.target.value)}
            />
            <button onClick={handleSaveClick}>Save</button>
          </>
        ) : (
          <>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {task.dueDate}</p>
            <button
              disabled={task.completed && "true"}
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              disabled={task.completed && "true"}
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;

import React, { useContext } from "react";
import Task from "../Task/Task";
import { TaskContext } from "../../App";
import "./index.css";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;

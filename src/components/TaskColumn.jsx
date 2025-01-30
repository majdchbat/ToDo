import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h2>

      {tasks
        .filter((task) => task.status === status) // Filter tasks by status
        .map((task) => (
          <TaskCard
            key={task.id} // Use a unique identifier (e.g., task.id) instead of index
            task={task}
            title={task.task}
            tags={task.tags}
            handleDelete={() => handleDelete(task.id)} // Pass task.id to handleDelete
          />
        ))}
    </section>
  );
};

export default TaskColumn;

import React from "react";
import { MdDelete } from "react-icons/md";
import { ITask } from "../Interfaces";
import { useRouter } from "next/navigation";

interface TaskProps {
  task: ITask;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = (props) => {
  const router = useRouter();
  const handleDelete = () => {
    console.log(props.task._id);
    fetch(`http://localhost:4000/TasksData/${props.task._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          props.onDelete();
        } else {
          console.error("Failed to delete task");
        }
      })
      .catch((error) => {
        console.error("Failed to delete task");
      });
    window.location.reload();
  };
  return (
    <div className="heading-container">
      <p className="task-value">{props.task.title}</p>
      <p className="task-value">{props.task.description}</p>
      <div className="task-icons">
        <MdDelete onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Task;

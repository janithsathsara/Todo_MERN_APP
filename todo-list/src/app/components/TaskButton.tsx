import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const TaskButton = () => {
  return (
    <div className="task-Button">
      <Link href="/AddTask" className="task-link">
        <h1>
          Add a task <FaPlus size={25} />
        </h1>
      </Link>
    </div>
  );
};

export default TaskButton;

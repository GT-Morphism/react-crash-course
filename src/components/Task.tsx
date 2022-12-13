import { FaTimes } from "react-icons/fa";
import { TasksType, OnFunction } from "../types/types";

const Task = ({
  task,
  onDelete,
  onToggle,
}: {
  task: TasksType;
  onDelete: OnFunction;
  onToggle: OnFunction;
}) => {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "var(--clr-primary)", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

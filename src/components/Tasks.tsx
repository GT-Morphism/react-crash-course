import Task from "./Task";
import { TasksType, OnFunction } from "../types/types";

const Tasks = ({
  tasks,
  onDelete,
  onToggle,
}: {
  tasks: TasksType[];
  onDelete: OnFunction;
  onToggle: OnFunction;
}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;

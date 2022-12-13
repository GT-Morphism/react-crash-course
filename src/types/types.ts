export type TasksType = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

export type TaskType = {
  text: string;
  day: string;
  reminder: boolean;
};

export type OnFunction = (id: number) => void;
export type OnAdd = (task: TaskType) => void;
export type ToggleAddTask = () => void;

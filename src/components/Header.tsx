import Button from "./Button";
import { ToggleAddTask } from "../types/types";

const Header = ({
  title,
  toggleAddTask,
  showAdd,
}: {
  title: string;
  toggleAddTask: ToggleAddTask;
  showAdd: boolean;
}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={showAdd ? "Close" : "Add"} onClick={toggleAddTask} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;

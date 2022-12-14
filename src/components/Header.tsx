import Button from "./Button";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button text={showAdd ? "Close" : "Add"} onClick={toggleAddTask} />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;

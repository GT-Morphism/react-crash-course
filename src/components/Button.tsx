const Buttons = ({
  text = "Add",
  bgColor = "#000",
  onClick,
}: {
  text?: string;
  bgColor?: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Buttons;

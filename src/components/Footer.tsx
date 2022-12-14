import { Link } from "react-router-dom";
const currentDate: number = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; {currentDate}</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;

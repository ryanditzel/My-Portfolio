import { Link } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
  return (
    <div className="nav-links">
      <Link className="rightsideLink" to="/">
        About
      </Link>
      <Link className="rightsideLink" to="/projects">
        Projects
      </Link>
      <Link className="rightsideLink" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Nav;

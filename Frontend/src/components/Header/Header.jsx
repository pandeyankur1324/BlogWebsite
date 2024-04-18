import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <span id="logo">Blog</span>
        <ul className="Navbar">
          <li>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/signup">
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

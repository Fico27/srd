import "./nav.css";
import { NavLink } from "react-router";

function Nav() {
  return (
    <div className="header-container">
      <h2>St. Srd Perisa</h2>
      <div className="nav-container">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/music">Music</NavLink>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

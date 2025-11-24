import "./nav.css";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-container ${scrolled ? "scrolled" : ""}`}>
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
            <NavLink to="/about-me">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact me</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

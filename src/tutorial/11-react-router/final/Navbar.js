import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/360px-Dunder_Mifflin%2C_Inc.svg.png"
          alt=""
        />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/" className="link">
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              <h1>About Us</h1>
            </Link>
          </li>
          <li>
            <Link to="/departments" className="link">
              <h1>Departments</h1>
            </Link>
          </li>
          <li>
            <Link to="/form" className="link">
              <h1>Application</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

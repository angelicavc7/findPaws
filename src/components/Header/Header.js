import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";


function Header() {
return(
  <nav className="Navbar">
      <h1>
        FindPaws
      </h1>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/Dashboard"
              className={ window.location.pathname === "/" || window.location.pathname === "/Dashboard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Found"
              className={window.location.pathname === "/Found" ? "nav-link active" : "nav-link"}
            >
              Found a Pet
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Lost"
              className={window.location.pathname === "/Lost" ? "nav-link active" : "nav-link"}
            >
              Lost a Pet
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Search"
              className={window.location.pathname === "/Search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
);
}

export default Header;
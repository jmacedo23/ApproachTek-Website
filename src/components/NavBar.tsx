import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./NavBar.css";
import dropdownIcon from "./dropdown.png"; // Ensure the correct path to dropdown.png
import logo from "./logo.png"; // Ensure the correct path to logo.png

function NavBar() {
  return (
    <div className="top">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image spin-image" />
      </div>
      <div className="navbar">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/LocHr">
                Location/Hours
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file here
import logo from '/logo.svg'; // Import the logo

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>

        <div className="navbar-logo">
        <img src={logo} alt="Logo" /> {/* Display the logo */}
      </div>
      </ul>
    </nav>
  );
}

export default Navbar;

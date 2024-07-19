// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">MovieApp</div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button className="navbar-link">Home</button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link">Favorites</button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link">Search History</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

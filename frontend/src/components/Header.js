// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create Header.css for custom styling

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <button className="header__menu" onClick={toggleSidebar}>
        &#9776;
      </button>
      <h1 className="header__logo">
        <Link to="/">YouTube Clone</Link>
      </h1>
      <input 
        type="text" 
        className="header__search" 
        placeholder="Search..." 
      />
      <Link to="/login" className="header__signin">
        Sign In
      </Link>
    </header>
  );
}

export default Header;

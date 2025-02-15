// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Create Sidebar.css for styling

function Sidebar({ isVisible }) {
  return (
    <aside className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Subscriptions</li>
        <li>Library</li>
        {/* Add more sidebar items as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;

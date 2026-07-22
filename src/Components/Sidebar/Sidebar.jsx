import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <ul>

        <li>🏠 Dashboard</li>

        <li>📚 My Scrapbooks</li>

        <li>❤️ Favorites</li>

        <li>⚙️ Settings</li>

        <li>🚪 Logout</li>

      </ul>

    </aside>
  );
};

export default Sidebar;
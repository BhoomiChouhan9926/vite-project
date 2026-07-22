import React from 'react'
import './DashboardNav.scss'
const DashboardNav = () => {
  return (
    <nav className="dashboard-navbar">

      <div className="logo">
        <h2>MemoryNest ❤️</h2>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search scrapbook..."
        />
      </div>

      <div className="profile">
        <span>
          Hello, Bhoomi👋
        </span>
      </div>

    </nav>
  )
}

export default DashboardNav

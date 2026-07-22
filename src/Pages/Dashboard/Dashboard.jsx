import React from 'react'

import Sidebar  from '../../Components/Sidebar/Sidebar.jsx'
import  WelcomeCard from '../../Components/WelcomeCard/WelcomeCard.jsx'
import DashboardNav from '../../Components/DashboardNav/DashboardNav.jsx'
import './Dashboard.scss'
const Dashboard = () => {
  return (
    <div className="dashboard">

      <DashboardNav/>

      <div className="dashboard-body">

        <Sidebar />

        <main className="dashboard-content">

          <WelcomeCard />

        </main>

      </div>

    </div>
  )
}

export default Dashboard

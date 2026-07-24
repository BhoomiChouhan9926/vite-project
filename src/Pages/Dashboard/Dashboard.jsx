import React, { useEffect, useState } from 'react'

import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import WelcomeCard from '../../Components/WelcomeCard/WelcomeCard.jsx'
import DashboardNav from '../../Components/DashboardNav/DashboardNav.jsx'
import { getScrapbooks } from '../../Services/MemoryServices.js'
import ScrapbookCard from '../../Components/ScrapbookCard/ScrapbookCard.jsx'
import './Dashboard.scss'
const Dashboard = () => {
  const [scrapbooks, setScarpbooks] = useState([]);
  useEffect(() => {
    const fetchScrapbooks = async () => {
      try {
        const res = await getScrapbooks();
        console.log("Hello this is my data")
        console.log(res)
        setScarpbooks(res.data.books)
        // console.log(scrapbooks)
      } catch (err) {
        console.log(err)
      }
    }
    fetchScrapbooks();
  }, [])

  return (
    <div className="dashboard">

      <DashboardNav />

      <div className="dashboard-body">

        <Sidebar />

        <main className="dashboard-content">

          <WelcomeCard />
          <div className="scrapbook-list">
            {scrapbooks.map((book) => {
              return (
                <ScrapbookCard key={book._id}
                  book={book} />
              )
            })}
          </div>

        </main>

      </div>

    </div>
  )
}

export default Dashboard

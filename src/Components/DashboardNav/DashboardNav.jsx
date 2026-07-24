import React, { useEffect, useState } from 'react'
import './DashboardNav.scss'
import {useNavigate} from 'react-router-dom'
import { getMe } from '../../Services/AuthServices'
const DashboardNav = () => {
  const navigate = useNavigate();
  
  const [user , setuser] = useState(null)


  useEffect(()=>{
    fetchData()
  },[])
  const fetchData =async ()=>{
    try {
      const data = await getMe();
      console.log(data)
      setuser(data)
    }catch(err){
      console.log(err)
    }
  }
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
          Hello,{user ? user.name : "User"} 👋

        </span>
      </div>

    </nav>
  )
}

export default DashboardNav

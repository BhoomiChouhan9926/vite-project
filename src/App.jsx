import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './Pages/Landing/Landing.jsx'
import RegisterPage from './Pages/Register/Register.jsx'
import DashboardPage from './Pages/Dashboard/Dashboard.jsx';
import LoginPage from './Pages/Login/Login';
import CreateScrapbookPage from './Pages/CreateScrapbook/CreateScrapbook.jsx';
import ScrapbookPage from './Pages/Scrapbook/Scrapbook.jsx';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LandingPage/>}/> 
          <Route path='/login' element= {<LoginPage/>}/>
          <Route path='/register' element = {<RegisterPage/>}/>
          <Route path='/dashboard' element = {<DashboardPage/>}/>
          <Route path='/create-scrapbook' element = {<CreateScrapbookPage/>}/>
          <Route path='/scrapbook/:id' element= {<ScrapbookPage/>}/>
        </Routes>
    </div>
  )
}

export default App

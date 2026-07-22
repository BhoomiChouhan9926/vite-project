import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Hero from '../../Components/Hero/Hero.jsx'
import Features from '../../Components/Features/Features.jsx'
import HowItWorks from '../../Components/HowItWorks/HowItWorks.jsx'
import Preview from '../../Components/Preview/Preview.jsx'
import CTA from '../../Components/CTA/CTA.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
const Landing = () => {
  return (
    <div>
     
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Preview/>
      <CTA/>
      <Footer/>
      
    </div>
  )
}

export default Landing

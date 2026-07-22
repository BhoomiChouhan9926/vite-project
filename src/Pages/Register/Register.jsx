import React, { useState } from 'react'
import Button from '../../Components/Button/Button'
 import Input from '../../Components/Input/Input'
 import {Link , useNavigate} from 'react-router-dom'
 import './Register.scss'
import {register} from '../../Services/AuthServices.js';

 
const Register = () => {
  const navigate = useNavigate();
  const [formData , setfromData] = useState({
    name:"",
    email : "",
    password:""

  })
  const handleChange = (e)=>{
     setfromData({
      ...formData,
       [e.target.name]: e.target.value,
     })
  }
  const submithandle = async (e) =>{
    e.preventDefault()
    try {
      const response = await register(formData)
      console.log(response)
      navigate('/login')
     }
    catch(err){
      console.log(err)

    }
  }
  return (
   <section className="register-page">

      <div className="register-card">

        <h1>MemoryNest ❤️</h1>

        <h2>Create Your Account</h2>

        <p>Start preserving your memories today.</p>

        <form className="register-form" onSubmit={submithandle} >
         
         <Input
            type="text"
            name = 'name'
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />

          <Input
            type="email"
            name = "email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Enter your email"
          />

          <Input
            type="password"
            name = "password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter your password"
          />

          <Button text="Register"  type='submit'/>

        </form>

        <div className="register-footer">
          <span>Already have an account? </span>

          <a href="/login">Login</a>
        </div>

      </div>

    </section>
  )
}

export default Register

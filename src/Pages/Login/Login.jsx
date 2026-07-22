import React, { useState } from 'react'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import './Login.scss'
import {login} from '../../Services/AuthServices.js'
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
const navigate = useNavigate();
const [formData,setfromData] = useState({
  email : "",
 password : ""
});
 const handleChange = (e)=>{
  
     setfromData (
    {  
      ...formData,
      [e.target.name]: e.target.value
    })
 }
  const submithandle = async (e)=>{
  e.preventDefault();
  try {
    const response =  await login(formData);
    console.log(response)
    navigate('/dashboard')
  } catch(err){
  console.log(err)
  }
  }
  return (
    <section className="login-page">

      <div className="login-card">

        <h1>MemoryNest ❤️</h1>

        <h2>Welcome Back</h2>

        <p>Login to continue your beautiful memories.</p>

        <form className="login-form" onSubmit={submithandle}>

          <Input
          
            type="email"
            name = 'email'
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            type="password"
            name = 'password'
            placeholder="Enter your password"
            value={formData.passsword}
            onChange={handleChange}
          />

          <Button text="Login" type='submit'  />

        </form>

        <div className="login-footer">
          <span>Don't have an account? </span>

          <a href="/register">Register</a>
        </div>

      </div>

    </section>
  )
}

export default Login

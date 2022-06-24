import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../actions/registrationActions';
import Input from '../Input/Input'
import "./Login.css";

const Login = ({handleClick}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setDetails({
      ...details,[name]:value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(login(details,navigate))
  }

  return (
    <div id="loginForm" className='form'>

        <div style={{width:"100%",textAlign:"center"}}>
            <img style={{height:"5rem"}} src="./popcorn.png"/>
            <p style={{textAlign:"center",fontSize:"1.5rem"}}>Log In</p>
        </div>

        <form onSubmit={(e)=>handleSubmit(e)}>

          <Input autoComplete={"off"} handleChange={(e)=>handleChange(e)} id="email" type="email" name="Your Email" placeHolder="name@gmail.com" value={details.email}/>
          <Input autoComplete={"off"} handleChange={(e)=>handleChange(e)} id="password" type="password" name="Password" placeHolder="Your Password" value={details.password}/>
        
          <button type='submit' style={{margin:"0",width:"100%",marginTop:"1rem"}} className='btn'>Log In</button>

        </form>
        <p style={{marginTop:"1.5rem"}}>Need an account? <span style={{cursor:"pointer",fontSize:"1.2rem",textDecoration:"underline"}} onClick={handleClick}>Sign up</span></p>
    </div>
  )
}

export default Login
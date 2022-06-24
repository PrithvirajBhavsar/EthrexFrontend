import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../../actions/registrationActions';
import Input from '../Input/Input';
import "../Login/Login.css";

const Signup = ({handleClick}) => {

  const [details, setDetails] = useState({email:"",password:""});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name,value} = e.target;

    setDetails({
      ...details,[name]:value
    })

  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(signup(details,navigate));
  }

  return (
    <div id="signupForm" className='form'>

        <div style={{width:"100%",textAlign:"center"}}>
            <img style={{height:"5rem"}} src="./popcorn.png"/>
            <p style={{textAlign:"center",fontSize:"1.5rem"}}>Sign up</p>
        </div>

        <form  onSubmit={(e)=>handleSubmit(e)}>

          <Input id="email" type="email" name="Your Email" value={details.email} placeHolder="name@gmail.com" handleChange={(e)=>handleChange(e)}/>
          <Input id="password" type="password" name="Set Password" value={details.password} placeHolder="Your Password" handleChange={(e)=>handleChange(e)}/>

          <button type="submit" style={{margin:"0",width:"100%",marginTop:"1rem"}} className='btn'>Sign up</button>

        </form>

        <p style={{marginTop:"1.5rem"}}>Already have an account? <span style={{cursor:"pointer",fontSize:"1.2rem",textDecoration:"underline"}} onClick={handleClick}>Log in</span></p>

    </div>
  )
}

export default Signup
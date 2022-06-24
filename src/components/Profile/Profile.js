import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/registrationActions";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import "./Profile.css";

const Profile = () => {

  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleClick = () => {
    document.getElementById("registrationCard").style.transform =
      "rotateY(180deg)";
  };

  const handleReverseClick = () => {
    document.getElementById("registrationCard").style.transform =
      "rotateY(0deg)";
  };

  const handleLogout = ()=>{
    dispatch(logout(navigate));
  }


  const displayPage = () => {

    if(!user.isLogin){
      return (
        <div id="outer">
          <div id="registrationCard">
            <Signup handleClick={() => handleReverseClick()}></Signup>
            <Login handleClick={() => handleClick()}></Login>
          </div>
        </div>
      );
    }else{
      return(
        <div id="outer">
          <div style={{color:"white",backgroundColor:"rgb(30,30,30)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem"}} id="registrationCard">
            <img style={{height:"8rem",margin:"1rem 0",backgroundColor:"white"}} src="/identicon.svg"></img>
            <h2 style={{width:"100%",textAlign:"center"}}>{user.email}</h2>
            <button onClick={()=>handleLogout()} className="btn" style={{backgroundColor:"white",color:"black",margin:"1rem 0",width:"100%"}}>Log out</button>
            <button onClick={()=> navigate(`/`)} className="btn" style={{margin:"0",width:"100%"}}>Home</button>
          </div>
        </div>
      )
    }
  };

  return (
    <>
      {displayPage()}
    </>
  );
};

export default Profile;

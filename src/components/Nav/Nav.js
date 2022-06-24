import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {

  const navigate = useNavigate();

  return (
    <div id="nav"> 

        <div style={{display:"flex",alignItems:"center",marginRight:"1rem"}} className='left'>

            <img style={{height:"3rem",width:"auto"}} src='./companylogo.png'></img>

            <ul id="nav-list" style={{listStyleType:"none",padding:"1rem"}}>
                <li onClick={()=>navigate(`/`)}>Home</li>
                {/* <li onClick={()=>navigate(`/movies`)}>Movies</li>
                <li onClick={()=>navigate(`/shows`)}>Shows</li> */}
            </ul>

        </div>

        <i onClick={()=>navigate(`/profile`)} style={{fontSize:"1.5rem",cursor:"pointer",color:"white"}} className="fa-solid fa-circle-user" />
        
    </div>
  )
}

export default Nav
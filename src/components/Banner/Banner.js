import React from 'react'
import "./Banner.css";
import Nav from '../Nav/Nav'

const Banner = () => {
  return (
    <div id="banner">
        <Nav></Nav>
        <img src="./banner.jpg"></img>
        <div id="banner-data">
          <div style={{position:"absolute",top:"50%",transform:"translateY(-50%)",padding:"2rem"}}> 
            <h1 style={{color:"white"}}>Stranger Things</h1>
            <p style={{color:"white",margin:"0.5rem 0"}}>5 seasons</p>
            <p style={{color:"white",minWidth:"100%",maxWidth:"30rem"}}>Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions.</p>
            <button style={{fontSize:"1.2rem",margin:"1rem 0"}} className='btn'> <i className="fa-solid fa-circle-play"></i> Watch now</button>
          </div>
        </div>
    </div>
  )
}

export default Banner
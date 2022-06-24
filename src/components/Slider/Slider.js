import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import "./Slider.css";

const Slider = ({content,heading}) => {

  const handleRightClick = (e)=>{
    const slider = e.target.parentElement.parentElement.nextElementSibling
    const clientWidth = slider.clientWidth;
    slider.scrollLeft += clientWidth;
  }

  const handleLeftClick = (e)=>{
    const slider = e.target.parentElement.parentElement.nextElementSibling
    const clientWidth = slider.clientWidth;
    slider.scrollLeft -= clientWidth;
  }

  const displayArray = ()=>{
    
    if(content !== undefined && content.length !== 0){
      
      return content.map((ele)=> {
        return <Card key={ele._id} data={ele}/>;
      })

    }

  }

  return (
    <div className='slider'>
      
      <div style={{display:"flex",justifyContent:"space-between"}}>

        <p style={{color:"white",fontSize:"1.2rem"}}>{heading}</p>

        <div>
          <button className='left btn' onClick={(e)=>handleLeftClick(e)}>Left</button>
          <button className='right btn' onClick={(e)=>handleRightClick(e)}>Right</button>
        </div>

      </div>

      <div className="mainSlider" style={{display:"flex"}}>
        {displayArray()}
      </div>
    </div>
  )
}

export default Slider
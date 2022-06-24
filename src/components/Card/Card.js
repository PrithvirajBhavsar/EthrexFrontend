import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getcontent } from '../../actions/contentActions';
import "./Card.css";

const Card = ({data}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = ()=>{
    dispatch(getcontent(data._id,navigate));
  }

  return (
    <div onClick={()=>handleClick()} className='card'>
      
        <img style={{height:"100%",width:"100%",borderRadius:"0.5rem"}} src={data.poster}></img>

        <div className='info'>
          <i style={{color:"white",fontSize:"2rem"}} className="fa-solid fa-circle-play"></i>
          <h3 style={{color:"white",textAlign:"center",width:"10rem"}}>{data.name}</h3>
          <h5 style={{color:"white"}}>{data.type}</h5>
          <p style={{color:"white",width:"10rem",textAlign:"center"}}>5 season</p>
        </div>

    </div>
  )
}

export default Card
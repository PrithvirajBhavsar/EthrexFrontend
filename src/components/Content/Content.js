import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postcomment } from '../../actions/contentActions';
import "./Content.css";

const Content = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector((state)=>state.watchReducer);
    const user = useSelector((state)=>state.userReducer)

    const [comment, setComment] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(user.isLogin){
            dispatch(postcomment({comment,content:data._id}));
        }else{
            alert("please login to add a comment")
        }
    }

  return (
    <div className='content' style={{padding:"2rem 5rem",color:"white"}}>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <button onClick={()=>navigate(`/`)} className='btn'>Home</button>
            <p>Now playing- {data.name}</p>
            <button onClick={()=>navigate(`/profile`)} className='btn'>Profile</button>
        </div>

        <video style={{width:"100%",marginTop:"2rem"}} controls={true}>
            <source src={data.trailer}></source>
        </video>

        <div style={{margin:"3rem 0"}}>
            <p style={{fontSize:"1.5rem",marginBottom:"1rem",fontWeight:"bold"}}>About</p>
            <div style={{display:"flex"}}>
                <div style={{height:"14rem",width:"10rem"}} className='cardContent'>
                    <img style={{height:"100%",width:"100%",borderRadius:"0.5rem"}} src={data.poster}/>
                </div>
                <div style={{margin:"1rem"}}>
                    <h1>{data.name}</h1>
                    <h3>{data.rating}</h3>
                    <p>{data.type}</p>
                    <h4>{data.duration}</h4>
                    <p style={{width:"30rem",maxWidth:"100%"}}>{data.description}</p>
                </div>
            </div>
        </div>

        <div>
            <p style={{fontSize:"1.5rem",marginBottom:"1rem",fontWeight:"bold"}}>Comments</p>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <textarea onChange={(e)=>setComment(e.target.value)} value={comment} style={{resize:"none",width:"30rem",height:"10rem"}} placeholder='such a great movie ....'></textarea><br></br>
                <button type='submit' style={{margin:"1rem 0"}} className='btn'>Add Comment</button>
            </form>
        </div>

    </div>
  )
}

export default Content
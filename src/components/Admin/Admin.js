import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movies } from '../../actions/contentActions'
import { storage } from '../../firebase/firebase'
import Input from '../Authentication/Input/Input'
import Slider from '../Slider/Slider'
import "./Admin.css"

const Admin = () => {

    const [content, setContent] = useState({
        name:"",
        description:"",
        type:"",
        rating:"",
        poster:"",
        trailer:"",
        category:"",
        duration:""
    })

    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    const dispatch = useDispatch();

    const data = useSelector((state)=>state.contentReducer);

    useEffect(() => {
        console.log(data);
    }, [data])
    
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const imageRef = ref(storage,`images/${image.name}`);
        const videoRef = ref(storage,`videos/${video.name}`);

        await uploadBytes(imageRef,image);
        await uploadBytes(videoRef,video);

        const imageURL = await getDownloadURL(imageRef);
        const videoURL = await getDownloadURL(videoRef);

        setContent({ ...content, poster: imageURL, trailer: videoURL })

        dispatch(movies({ ...content, poster: imageURL, trailer: videoURL }));
    }

    const handleChange = (e)=>{

        setContent({
            ...content,[e.target.name]:e.target.value
        })
    }

    const handleImageChange = (e)=>{

        if(e.target.files[0] && e.target.files[0].type.substring(0,e.target.files[0].type.indexOf("/")) === "image"){

            const imageDiv = document.getElementById("image");
            imageDiv.innerHTML = ``;
            const image = document.createElement("img");
            image.src = URL.createObjectURL(e.target.files[0]);
            image.style.height = "100%"
            image.style.width = "auto"
            imageDiv.appendChild(image);

            setImage(e.target.files[0]);
        }else{
            alert("please select an image");
        }
    }

    const handleVideoChange = (e)=>{
        
        const videoDiv = document.getElementById("video");
        videoDiv.innerHTML = ``;
        const video = document.createElement("video");

        video.src = URL.createObjectURL(e.target.files[0]);
        video.style.height = "100%"
        video.controls = true;
        video.style.width = "auto"

        // video.appendChild(source);
        videoDiv.append(video);
        setVideo(e.target.files[0]);
    }

  return (
    <div style={{color:"white"}}>
        <form onSubmit={(e)=>handleSubmit(e)} style={{width:"95%",margin:"auto",backgroundColor:"rgb(45,45,45)",padding:"2rem",marginTop:"2rem",borderRadius:"0.5rem"}}>
        <h1>Upload Content</h1>
            <div style={{display:"flex"}}>
                <div style={{width:"80%"}}>
                    <div className='inputs' style={{display:"flex"}}>
                        <Input handleChange={(e)=>handleChange(e)} name="Name" id="name" placeHolder="Name"/>
                        <Input handleChange={(e)=>handleChange(e)} name="Type" id="type" placeHolder="Type"/>
                        <Input handleChange={(e)=>handleChange(e)} name="Rating" id="rating" placeHolder="Rating"/>
                    </div>
                    <div className='inputs' style={{display:"flex"}}>
                        <Input handleChange={(e)=>handleChange(e)} name="Category" id="category" placeHolder="movie/show"/>
                        <Input handleChange={(e)=>handleChange(e)} name="Duration" id="duration" placeHolder="Duration"/>
                    </div>
                    <div style={{marginTop:"0.5rem"}}>
                        <label>Description</label><br></br>
                        <textarea onChange={(e)=>handleChange(e)} name='description' value={content.description} style={{resize:"none",outline:"none",width:"30rem",height:"7rem",borderRadius:"0.2rem",marginTop:"0.5rem"}}></textarea>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",width:"20%"}}>
                    <div style={{backgroundColor:"rgba(230,230,230,0.5)",borderRadius:"0.2rem",display:"flex",width:"8rem",height:"15rem",flexDirection:"column",cursor:"pointer",minWidth:"10rem",justifyContent:"center",alignItems:"center"}} onClick={()=>document.getElementById("poster").click()} id="image">
                        <i className='fa fa-plus'/>
                        <p>Add image</p>
                    </div>
                    <input onChange={(e)=>handleImageChange(e)} value={content.image} style={{display:"none"}} name="poster" id="poster" type="file" multiple={false} accept="image/*"></input>
                </div>
            </div>

            <div style={{backgroundColor:"rgba(230,230,230,0.5)",borderRadius:"0.2rem",marginTop:"0.5rem",cursor:"pointer",height:"20rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} onClick={()=>document.getElementById("trailer").click()} id="video">
                <i className='fa fa-plus'/>
                <p>Add Video</p>
            </div>
            <input onChange={(e)=>handleVideoChange(e)} value={content.video} style={{display:"none"}} name="trailer" id="trailer" type="file" multiple={false} accept="video/*"></input>
            <button style={{width:"100%",margin:"1rem 0"}} type='submit' className='btn'>Add Content</button>
        </form>
    </div>
  )
}

export default Admin
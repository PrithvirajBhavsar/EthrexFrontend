import React from 'react'
import "./Input.css";

const Input = ({id,name,handleChange,placeHolder,value,type,autoComplete}) => {
  return (
    <div className='allInputs'>
        <label htmlFor={id} >{name}</label><br></br>
        <input autoComplete={autoComplete} type={type} onChange={handleChange} id={id} name={id} placeholder={placeHolder} value={value}/>
    </div>
  )
}

export default Input
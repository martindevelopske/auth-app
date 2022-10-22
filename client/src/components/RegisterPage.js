import axios from 'axios'
import React, { useState } from 'react'
import { StyledDiv } from '../Styles/Styled'

function RegisterPage() {
  const [values,setValues]=useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setValues({...values, [e.target.name]: e.target.value})}
    
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
      const {data}= await axios.post('http://localhost:3001/login', {...values},{withCredentials:true})
      console.log(data);
    }catch(err){
      console.log(err.message);
    }
    
  }
  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <div> Register</div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange}></input>
        </div>
        <div>
          <label>password:</label>
          <input type="password" name="password" onChange={handleChange}></input>
        </div>
        <button type='submit'> register</button>
      </form>
    </StyledDiv>
  )
}

export default RegisterPage

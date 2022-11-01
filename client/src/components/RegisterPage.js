import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StyledDiv } from '../Styles/Styled'

function RegisterPage() {
  const navigate=useNavigate();
  const [values,setValues]=useState({
    email:" ",
    password:" "
  })

  const handleChange=(e)=>{
    setValues({...values, [e.target.name]: e.target.value})}
    
  //handle errors
  const handleError=()=>{
    const {email,password}=values;
    if(email.length<10){
      toast.error("Please use a correct email", {position: "top-right"});
      return false;
    } else if(password.length<3){
      toast.error("Password length should be more than 3 characters", {position:"top-right"});
      return false;
    } else{
      return true;
    }
    
  }
  //generate error
  const generateError=(err)=>{
  toast.error(err, {
    position:'top-right',
  })
  };
  //handle submit
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(handleError()){
      try{
      
        const {data}= await axios.post('http://localhost:3001/register', {...values},{withCredentials:true})
        console.log(data);
        //check backend data
        if(data){
          if(data.errors){
            const {email,password}=data.errors;
            if(email){
              generateError(email);
              return true;
            } else if(password){
              generateError(password);
              return true;
            } else{
              return false;
            }
          }
        } else {
          console.log("no data");
        }
       navigate("/secret") 
      }
        catch(err){
          console.log(err);
        }

      } else {
        console.log("incorrect data");
      }
        
      
  
  }
  return (
  
  <>
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
    <ToastContainer />
  </>
    
  )
}

export default RegisterPage

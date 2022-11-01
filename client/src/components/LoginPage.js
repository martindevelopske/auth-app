import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { StyledDiv } from '../Styles/Styled'
import { useNavigate } from 'react-router-dom';


function LoginPage() {
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
    position:'bottom-right',
  })
  };
  //handle submit
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(handleError()){
      try{
        const {data}= await axios.post('http://localhost:3001/login', {...values},{withCredentials:true})
        console.log(data);
        if(data){
          if(data.errors){
            const {email,password}=data.errors;
            if(email){
              generateError(email);
            } else if(password){
              generateError(password);
            }
          }
        } else{
          console.log("no data");
        }
        navigate("/secret")
      }catch(err){
        console.log(err.message);
      }
      
    }
    
  }
  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <div>Login</div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange}></input>
        </div>
        <div>
          <label>password:</label>
          <input type="password" name="password" onChange={handleChange}></input>
        </div>
        <button type='submit'> Login</button>
      </form>
      <ToastContainer />
    </StyledDiv>
  )
}

export default LoginPage
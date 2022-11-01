import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'
import axios from "axios";
import {ToastContainer,toast }from 'react-toastify'

function SecretPage() {
  const navigate= useNavigate();
  const [cookies, setCookie, removeCookie]= useCookies([]);
  //use effect
  useEffect(()=>{
    const verifyUser= async()=>{
      if(!cookies.jwt){
        navigate("/login")
      } else{
        const {data} =await axios.post("http://localhost:3001",{},{withCredentials:true});
        if(!data.status){
          removeCookie("jwt");
          navigate("/login");
        } else{
          toast(`Hi ${data.user}`)
        }
      }
    }
    verifyUser();
  }, [cookies,navigate,removeCookie])
  const logout= ()=>{
    removeCookie('jwt')
    navigate("/login")
  }

  return (
    <>
    
    <div>secretPage</div>
    <button onClick={logout}>Log out</button>
    <ToastContainer />
    </>
    
  )
}

export default SecretPage
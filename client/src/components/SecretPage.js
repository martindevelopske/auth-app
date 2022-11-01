import React from "react";
import { useNavigate } from "react-router-dom";


function SecretPage() {
  const navigate= useNavigate();
  
  const logout= ()=>{
    navigate("/login")
  }

  return (
    <>
    <div>secretPage</div>
    <button onClick={logout}>Log out</button>
    </>
    
  )
}

export default SecretPage
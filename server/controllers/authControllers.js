const userModel = require("../models/userModel");
const jwt=require('jsonwebtoken')

//create token
const maxAge= 3*24*60*60;
const createToken=(id)=>{
    return jwt.sign({id}, "Martin captain super secret key", {
        expiresIn: maxAge
    })
}

//handle errors
const handleErrors= (err)=>{
    let errors= {email:"", password:""}
    //duplicate mail
    if(err.code === 11000){
        errors.email="Email is already registered";
        return errors;
    } 
    if(err.message === "Email not found"){
        errors.email= "That email is not registered"
    }
    if(err.message=== "incorrect password"){
        errors.password="Incorrect password";
    }
    if(err.message.includes("users validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]= properties.message;
        })
    }
    return errors;
}

const Register= async (req,res,next)=>{
    try{
        const { email,password }=req.body;
        console.log(email, password);
        //create user
        const User= await userModel.create({email, password});
        const token= createToken(User._id);
        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly:false,
            maxAge: maxAge*1000
        })
        res.status(200).json({user:User._id,created:true})
         }catch(err){
            console.log(err.message);
            const errors=handleErrors(err);
            res.json({errors, created:false})
         }  
    
}

const Login = async(req,res,next)=>{
    try{
      const { email,password }=req.body;
      console.log(email, password);
      //find user
      const User= await userModel.login(email, password);
      const token= createToken(User._id);
      res.cookie("jwt", token, {
          withCredentials: true,
          httpOnly:false,
          maxAge: maxAge*1000
      })
       }catch(err){
    
       } 
 }

 module.exports={
    Register,
    Login
 }

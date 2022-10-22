const register= async (req,res,next)=>{
   try{
    const {email, password}=req.body;
    console.log(email, password);
   }catch(err){

   } 
    
}

const login =async (req,res,next)=>{
    try{
        res.send("login page");
        const {email, password}=req.body;
        console.log(email, password);
       }catch(err){
    
       } 
}

module.exports= {
    register,
    login
}
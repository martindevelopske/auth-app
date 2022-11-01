const User=require("../models/userModel");
const jwt=require("jsonwebtoken");

module.exports.checkUser=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(token){
        console.log(token);
        jwt.verify(token, "Martin captain super secret key", async(err,decodedToken)=>{
            if(err){
                res.json({status:false})
                next();
            } else{
                const user=await User.findById(decodedToken.id);
                if(user){
                    res.json({status:true, user:user.email})
                } else{
                    res.json({status:false});
                    next();
                }
            }
        })
    } else{
        res.json({status:false});
        next();
    }
}
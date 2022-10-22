const mongoose=require('mongoose')

const ConnectDB=async()=>{
    const url="";
    try{
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        .then(
            ()=>console.log("database connected")
        )
        .catch((err)=>console.log(err.message))
        
    }catch(err){
        console.log(err.message);
    }
}


module.exports= ConnectDB

const mongoose=require('mongoose')

const ConnectDB=async()=>{
    const url="mongodb+srv://auth:auth123@finaltry.6o0tnrd.mongodb.net/users?retryWrites=true&w=majority";
    try{
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        .then(
            ()=>console.log("database connected")
        )
        }catch(err){
        console.log(err.message);
    }
}


module.exports= ConnectDB

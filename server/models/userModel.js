const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type:String,
        required: [true, "Password is required"]
    }
})
//hash password
userSchema.pre("save", async function(next){
    const salt= await bcrypt.genSalt();
    this.password= await bcrypt.hash(this.password,salt);
    next();
})
//login function
userSchema.statics.login=async function(email,password){
    const user =await this.findOne({email});
    if(user){
        console.log("user found");
        const auth= await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
        throw Error("incorrect password");
    } {
        throw Error("Email not found");
    }
}
module.exports= mongoose.model("user",userSchema);

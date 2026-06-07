import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        minlength:[2,"Name must be at least two characters"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        trim:true,
        unique:true,
        lowercase:true,
        match: [/\S+@\S+\.\S+/, "Invalid email format"],
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[6,"Password must be minimum of length 6"],
        select:false
    }
},{
    timestamps:true
})

userSchema.pre("save",async function(next){
    if(!this.isModified(this.password)) return next();
    this.password = await bcrypt.hash(this.password,12)
    next();
})

const User = mongoose.model("User",userSchema);

export default User;
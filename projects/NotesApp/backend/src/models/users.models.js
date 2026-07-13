import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:30
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,  
        minLength:6,
        trim:true,
        select:false
    },
    profileImage:{
        type:String,
        default:""
    }
},{
    timestamps:true
})

const User = mongoose.model("User" , userSchema);

export default User;
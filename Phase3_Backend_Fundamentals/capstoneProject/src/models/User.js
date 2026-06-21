import mongoose from "mongoose";

const userSchema = new mongoose.model({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    todos:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Todo"
    }
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema);

export default User;

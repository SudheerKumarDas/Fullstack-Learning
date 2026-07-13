import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:100,
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    tags:[
        {
            type:String,
            trim:true
        }
    ],
    color:{
        type:String,
        default:"#ffffff"
    },
    isPinned:{
        type:Boolean,
        default:false
    },
    isArchived:{
        type:Boolean,
        default:false
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const Note = mongoose.model("Note",noteSchema);

export default Note;
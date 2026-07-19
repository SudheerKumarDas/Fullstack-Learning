import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    genre:{
        type:[String],
        enum:["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"],
        required:true
    },
    releaseYear:{
        type:Number,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:false
    },
    rating:{
        type:Number,
        required:false,
        default:0
    },
    posterUrl:{
        type:String,
        required:false
    }
},{
    timestamps:true
})

const Movie = mongoose.model("Movie",movieSchema);

export default Movie;
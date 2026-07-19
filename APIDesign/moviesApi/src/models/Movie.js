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
        type:Number
    },
    rating:{
        type:Number
    },
    posterUrl:{
        type:String
    }
},{
    timestamps:true
})

const Movie = mongoose.model("Movie",movieSchema);

export default Movie;
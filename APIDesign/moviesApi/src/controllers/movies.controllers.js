import Movie from "../models/Movie.js"

export const createMovies = async (req,res) => {
    try {
        const { title, description, director, genre, releaseYear, language, duration, rating, posterUrl } = req.body;
        if(!title || !description || !director || !genre || !releaseYear || !language){
            return res.status(400).json({
                message:"Not enough data"
            })
        }
        const movie = await Movie.findOne({
            title,
            director,
            releaseYear
        })
        if(movie){
            return res.status(409).json({
                message:"Movie already exists"
            })
        }
        const newMovie = await Movie.create({
            title,
            description,
            director,
            genre,
            releaseYear,
            language,
            duration,
            rating,
            posterUrl
        })
        res.status(201).json({
            success:true,
            message:"Movie created successfully",
            data:newMovie
        })
    } catch (error) {
        console.error("Error creating movie",error)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}